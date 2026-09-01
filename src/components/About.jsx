import useInView from "../hooks/useInView"
import Reveal from "./Reveal"

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section id="about" className="relative py-28 px-6 bg-base-950 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal variant="fade">
          <p className="font-head text-sm tracking-[0.3em] text-neon-violet uppercase mb-3">
            Qui suis-je
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">À propos</h2>
          <p className="mt-5 text-ink-500 max-w-md">
            Étudiant en Intelligence Artificielle, passionné, curieux et toujours prêt à apprendre de nouvelles technologies pour développer des solutions innovantes, intelligentes et efficaces.
          </p>
        </Reveal>

        {/* Neon gaming frame */}
        <Reveal variant="neon" className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg group/frame">
          <div ref={ref} className="relative">
            <div className="p-[3px] clip-hud-lg bg-gradient-to-br from-neon-pink via-neon-blue to-neon-violet shadow-neon-blue transition-transform duration-500 group-hover/frame:scale-[1.02]">
              <div className="clip-hud-lg bg-base-900 relative min-h-[320px] sm:min-h-[300px] overflow-hidden">
                {inView && (
                  <div className="absolute inset-0 overflow-hidden animate-screen-on">
                    {/* scanline sweep, once */}
                    <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent animate-scanline" />
                    <div className="h-full w-full flex items-center px-6 py-10 sm:px-8 sm:py-8">
                      <p className="font-body text-base sm:text-base md:text-lg leading-relaxed text-ink-100">
                        Je m'appelle{" "}
                        <span className="text-neon-blue font-medium">RAKOTOAMBININTSOA Lucien</span>, étudiant en Intelligence Artificielle basé à Madagascar. J’aime concevoir des projets qui combinent technologie et créativité pour transformer des idées en solutions concrètes. Chaque projet est pour moi une occasion d’expérimenter, d’apprendre et de progresser.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Badge with name, overlapping the bottom border */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 px-6 py-1.5 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-violet clip-hud">
              <span className="font-head text-xs tracking-[0.2em] text-base-950 font-semibold uppercase">
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}