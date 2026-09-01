import { Award } from "lucide-react"
import certifications from "../data/certifications"
import Reveal from "./Reveal"

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 bg-base-950">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade" className="mb-14 text-center">
          <p className="font-head text-sm tracking-[0.3em] text-hud-violet uppercase mb-3">
            Reconnaissances
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">Certifications</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name + i} variant="fade" delay={i * 90} className="h-full">
              <div className="h-full flex items-start gap-4 bg-base-800 border border-white/10 hover:border-hud-violet/60 hover:shadow-hud-violet transition-all duration-300 p-5">
                <div className="w-11 h-11 shrink-0 rounded-full bg-hud-violet/10 border border-hud-violet/40 flex items-center justify-center">
                  <Award size={20} className="text-hud-violet" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-head text-sm text-ink-100 leading-snug">{cert.name}</p>
                  <p className="mt-1 text-xs text-ink-500">
                    {cert.issuer} — {cert.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}