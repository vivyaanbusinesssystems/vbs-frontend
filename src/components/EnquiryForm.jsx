import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { INDUSTRIES, SERVICES } from "../lib/services-data";

/**
 * The one enquiry form used on the Contact page and on every service page.
 * It posts to the backend (/api/inquiry), which saves the lead and emails the admin.
 */
export default function EnquiryForm({ defaultService = "", messagePlaceholder = "Share a few details about your requirement…" }) {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.name?.trim()) newErrors.name = "Please enter your full name.";
        if (!data.company?.trim()) newErrors.company = "Company name is required.";

        if (!data.email?.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (data.phone && !/^\+?[0-9\s-]{7,15}$/.test(data.phone)) {
            newErrors.phone = "Please enter a valid phone number.";
        }

        if (!data.service) newErrors.service = "Please select a required service.";
        if (!data.message?.trim()) newErrors.message = "Please provide some details about your requirement.";
        if (!data.terms) newErrors.terms = "You must agree to the Privacy Policy.";

        return newErrors;
    };

    // Clears a field's error as soon as the user edits it
    const handleChange = (e) => {
        const { name } = e.target;
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const payload = Object.fromEntries(new FormData(form).entries());

        const validationErrors = validateForm(payload);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setSubmitting(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/inquiry`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success("Enquiry received. We'll be in touch shortly.");
                form.reset();
            } else {
                toast.error(data.message || "Failed to submit enquiry. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Network error. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        // noValidate: our own inline messages replace the browser's popup tooltips
        <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <TextField label="Full Name" name="name" required error={errors.name} onChange={handleChange} />
                <TextField label="Company" name="company" required error={errors.company} onChange={handleChange} />
                <TextField label="Work Email" name="email" type="email" required error={errors.email} onChange={handleChange} />
                <TextField label="Phone" name="phone" type="tel" error={errors.phone} onChange={handleChange} />
            </div>

            <SelectField label="Service Required" name="service" required defaultValue={defaultService} error={errors.service} onChange={handleChange}>
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
            </SelectField>

            <SelectField label="Industry" name="industry" error={errors.industry} onChange={handleChange}>
                <option value="">Select your industry…</option>
                {INDUSTRIES.map((i) => (
                    <option key={i} value={i}>{i}</option>
                ))}
            </SelectField>

            <div>
                <label className="text-sm font-semibold block mb-1.5">
                    Message <span className="text-destructive">*</span>
                </label>
                <textarea
                    name="message"
                    rows={4}
                    onChange={handleChange}
                    placeholder={messagePlaceholder}
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-border focus:border-brand focus:ring-brand/20"
                        }`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>}
            </div>

            <div>
                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={handleChange}
                        className="mt-0.5 accent-[oklch(0.32_0.12_258)] shrink-0"
                    />
                    <span>
                        I have read and agree to the{" "}
                        <Link to="/privacy-policy" className="text-brand font-semibold hover:underline">Privacy Policy</Link>.
                    </span>
                </label>
                {errors.terms && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.terms}</p>}
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="btn-shine w-full rounded-full gradient-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-elegant hover:-translate-y-0.5 hover:shadow-2xl disabled:opacity-60 disabled:hover:translate-y-0 transition-all mt-2"
            >
                {submitting ? "Sending…" : "Submit Enquiry"}
            </button>
        </form>
    );
}

function TextField({ label, name, type = "text", required, error, onChange }) {
    return (
        <div>
            <label className="text-sm font-semibold block mb-1.5">
                {label} {required && <span className="text-destructive">*</span>}
            </label>
            <input
                name={name}
                type={type}
                onChange={onChange}
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ${error
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-border focus:border-brand focus:ring-brand/20"
                    }`}
            />
            {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}

function SelectField({ label, name, required, error, onChange, defaultValue, children }) {
    return (
        <div>
            <label className="text-sm font-semibold block mb-1.5">
                {label} {required && <span className="text-destructive">*</span>}
            </label>
            <select
                name={name}
                onChange={onChange}
                defaultValue={defaultValue}
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ${error
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-border focus:border-brand focus:ring-brand/20"
                    }`}
            >
                {children}
            </select>
            {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}
