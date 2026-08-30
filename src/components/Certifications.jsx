import { useState } from "react"
import { Award, X } from "lucide-react"
import certifications from "../data/certifications"
import Reveal from "./Reveal"

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" className="relative py-28 px-6 bg-base-950">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade" className="mb-14 text-center">
          <p className="font-head text-sm tracking-[0.3em] text-hud-violet uppercase mb-3">
            Reconnaissances
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">Certifications</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name + i} variant="fade" delay={i * 90}>
              <button
                type="button"
                onClick={() => cert.image && setSelected(cert)}
                className="group w-full text-left bg-base-800 border border-white/10 hover:border-hud-violet/60 hover:shadow-hud-violet transition-all duration-300 h-full overflow-hidden"
              >
                <div className="w-full h-40 bg-hud-violet/10 flex items-center justify-center overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Award size={28} className="text-hud-violet" strokeWidth={1.6} />
                  )}
                </div>
                <div className="p-5">
                  <p className="font-head text-sm text-ink-100 leading-snug">{cert.name}</p>
                  <p className="mt-1 text-xs text-ink-500">
                    {cert.issuer} — {cert.year}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Fermer"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>

          <div className="max-w-3xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.image}
              alt={selected.name}
              className="max-w-full max-h-[75vh] object-contain border border-white/10"
            />
            <p className="mt-4 font-head text-sm text-white text-center">{selected.name}</p>
            <p className="text-xs text-ink-500">
              {selected.issuer} — {selected.year}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}