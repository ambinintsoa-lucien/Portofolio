import heroPhoto from "../assets/hero-photo.png"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
    >
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <div className="border border-white/70 hover:border-neon-blue px-6 py-5 sm:px-8 sm:py-6 w-fit max-w-[90vw] sm:max-w-sm backdrop-blur-[2px] transition-colors duration-300">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-ink-100 leading-snug break-words">
              RAKOTOAMBININTSOA Lucien
            </p>
            <p className="mt-2 font-head text-xs sm:text-sm tracking-[0.15em] text-neon-blue uppercase break-words">
              Étudiant en Intelligence Artificielle
            </p>
          </div>

          
           <a href="/cv.pdf"
            download
            className="group/box mt-6 inline-flex items-center gap-2 border border-white/40 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300 px-5 py-3"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="text-ink-100 group-hover/box:text-neon-blue transition-colors"
            >
              <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            </svg>
            <span className="font-head text-xs tracking-wide text-ink-300 group-hover/box:text-ink-100 transition-colors">
              Télécharger CV
            </span>
          </a>
        </div>

        {/* Photo side, right, contained (not full background) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={heroPhoto}
            alt="Portrait"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}