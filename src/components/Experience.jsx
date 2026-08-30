import { Cpu } from "lucide-react"
import experience from "../data/experience"
import CircuitCard from "./CircuitCard"
import Reveal from "./Reveal"

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-base-900">
      <div className="max-w-4xl mx-auto">
        <Reveal variant="fade" className="mb-14 text-center">
          <p className="font-head text-sm tracking-[0.3em] text-cyan-300 uppercase mb-3">
            Parcours pro
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">Expérience</h2>
        </Reveal>

        <div className="flex flex-col gap-8">
          {experience.map((item, i) => (
            <Reveal key={i} variant="circuit" delay={i * 120}>
              <CircuitCard className="p-8 md:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-300/40 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                    <Cpu className="w-6 h-6 text-cyan-300" strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-5 font-head text-xl tracking-wide text-ink-100">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-head text-sm tracking-[0.15em] text-cyan-300 uppercase">
                    {item.company}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">{item.period}</p>
                  <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-lg">
                    {item.text}
                  </p>
                </div>
              </CircuitCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
