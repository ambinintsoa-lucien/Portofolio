import formation from "../data/formation"
import Reveal from "./Reveal"

const COLOR_MAP = {
  violet: { border: "border-formation-violet", bg: "bg-formation-violet", shadow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]" },
  green: { border: "border-formation-green", bg: "bg-formation-green", shadow: "hover:shadow-[0_0_20px_rgba(58,193,107,0.35)]" },
  orange: { border: "border-formation-orange", bg: "bg-formation-orange", shadow: "hover:shadow-[0_0_20px_rgba(245,137,58,0.35)]" },
  blue: { border: "border-formation-blue", bg: "bg-formation-blue", shadow: "hover:shadow-[0_0_20px_rgba(61,123,240,0.35)]" },
}

export default function Formation() {
  return (
    <section id="formation" className="relative py-28 px-6 bg-base-900">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade" className="mb-14 text-center">
          <p className="font-head text-sm tracking-[0.3em] text-ink-500 uppercase mb-3">
            Parcours
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">Formation</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {formation.map((item, i) => (
            <Reveal key={item.number} variant="fade" delay={i * 90}>
              <div
                className={`bg-base-800 border-[3px] ${COLOR_MAP[item.color].border} ${COLOR_MAP[item.color].shadow} p-6 relative transition-all duration-300 hover:-translate-y-1.5`}
              >
                <span className="font-display text-2xl text-ink-100/90">{item.number}</span>
                <h3 className="mt-3 font-head text-lg tracking-wide text-ink-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.text}</p>
                <span className={`mt-4 block w-10 h-[3px] ${COLOR_MAP[item.color].bg}`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
