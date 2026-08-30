import useInView from "../hooks/useInView"
import useCountUp from "../hooks/useCountUp"
import stats from "../data/stats"
import Reveal from "./Reveal"

function StatItem({ stat, inView }) {
  const value = useCountUp(stat.value, inView)
  return (
    <div className="text-center">
      <p className="font-display text-4xl md:text-5xl text-ink-100">
        {value}
        {stat.suffix || ""}
      </p>
      <p className="mt-2 font-head text-xs md:text-sm tracking-[0.15em] text-ink-500 uppercase">
        {stat.label}
      </p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section className="relative py-20 px-6 bg-base-900 border-y border-white/5">
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} variant="fade" delay={i * 100}>
            <StatItem stat={stat} inView={inView} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
