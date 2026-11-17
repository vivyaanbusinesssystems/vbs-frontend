// WhatsApp glyph: white chat bubble with the green handset cut into it (drawn on a green round button below)
const WhatsAppIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12.031 0C5.393 0 0 5.391 0 12.029c0 2.124.553 4.195 1.604 6.012L.152 24l6.115-1.603a12.031 12.031 0 0 0 5.764 1.472h.005c6.634 0 12.028-5.392 12.028-12.029 0-3.216-1.253-6.24-3.528-8.514A11.968 11.968 0 0 0 12.031 0z" fill="#fff" />
        <path d="M17.587 15.533c-.304-.152-1.802-.89-2.08-.992-.278-.102-.481-.152-.684.152-.203.304-.784.992-.962 1.194-.177.202-.355.228-.659.076-.304-.152-1.285-.473-2.45-1.516-.906-.811-1.517-1.813-1.695-2.117-.177-.304-.019-.469.133-.62.137-.136.304-.354.456-.532.152-.177.203-.304.304-.506.101-.202.051-.38-.025-.532-.076-.152-.684-1.645-.938-2.253-.247-.593-.497-.512-.684-.522-.177-.01-.38-.013-.583-.013-.203 0-.532.076-.81.38-.279.304-1.064 1.038-1.064 2.532 0 1.494 1.089 2.937 1.241 3.14.152.203 2.14 3.266 5.18 4.582.722.313 1.286.5 1.727.64.725.23 1.386.197 1.905.12.583-.087 1.802-.734 2.055-1.443.253-.71.253-1.317.177-1.444-.076-.127-.279-.203-.583-.355z" fill="#25D366" />
    </svg>
);

export default function WhatsAppWidget() {
    return (
        <a
            href="https://wa.me/919151566767?text=Hi%20Vivyaan%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            // sits above the phone's bottom tab bar (h-16) and in the corner on desktop
            className="fixed bottom-22 right-4 lg:bottom-6 lg:right-6 z-60 group flex items-center gap-3"
            aria-label="Chat with us on WhatsApp"
        >
            {/* Label: slides out on hover (desktop only) */}
            <span className="pointer-events-none hidden lg:block translate-x-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground opacity-0 shadow-card transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                Chat with us
            </span>

            <span className="relative grid h-14 w-14 shrink-0 place-items-center">
                {/* One soft pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping motion-reduce:animate-none [animation-duration:2.6s]" aria-hidden="true" />
                {/* The button */}
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/35 ring-4 ring-background/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <WhatsAppIcon className="h-7 w-7" />
                </span>
            </span>
        </a>
    );
}
