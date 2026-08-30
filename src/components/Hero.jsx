import heroPhoto from "../assets/hero-photo.png"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden bg-base-950"
    >
      {/* Background photo, grayscale, darkens further on hover */}
      <div className="absolute inset-0 group">
        <img
          src={heroPhoto}
          alt="Portrait"
          className="w-full h-full object-cover grayscale transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/60 to-base-950/20" />
        <div className="absolute inset-0 bg-base-950/0 transition-colors duration-500 group-hover:bg-base-950/55" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 pt-40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Overlay frame: name + role */}
          <div className="border border-white/70 hover:border-neon-blue px-6 py-5 sm:px-8 sm:py-6 w-fit max-w-[90vw] sm:max-w-sm backdrop-blur-[2px] transition-colors duration-300">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-ink-100 leading-snug break-words">
              RAKOTOAMBININTSOA Lucien
            </p>
            <p className="mt-2 font-head text-xs sm:text-sm tracking-[0.15em] text-neon-blue uppercase break-words">
              Étudiant en Intelligence Artificielle
            </p>
          </div>

          {/* Four boxes row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto md:max-w-md">


            <a href="/CV_RAKOTOAMBININTSOA.pdf"
              download
              className="group/box aspect-square flex flex-col items-center justify-center gap-2 border border-white/40 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300 text-center px-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="text-ink-100 group-hover/box:text-neon-blue transition-colors"
              >
                <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              <span className="font-head text-[11px] tracking-wide text-ink-300 group-hover/box:text-ink-100 transition-colors">
                Télécharger CV
              </span>
            </a>

            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square border border-dashed border-white/20 flex items-center justify-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}