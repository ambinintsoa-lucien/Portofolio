import skills from "../data/skills"
import Reveal from "./Reveal"

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-base-950 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal variant="fade" className="mb-14 text-center">
          <p className="font-head text-sm tracking-[0.3em] text-hud-violet uppercase mb-3">
            Stack
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">Compétences</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} variant={i % 2 === 0 ? "hud" : "hud-right"} delay={(i % 3) * 100}>
              <div className="p-[2px] clip-hud bg-gradient-to-br from-hud-violet/70 via-hud-violet/20 to-hud-violet/70 hover:from-hud-violet hover:to-hud-violet transition-all duration-300 hover:shadow-hud-violet hover:-translate-y-1">
                <div className="clip-hud bg-base-800 px-6 py-7 flex items-center justify-between">
                  <span className="font-head text-base tracking-wide text-ink-100">
                    {skill.name}
                  </span>
                  <span className="font-display text-lg text-hud-violet">
                    {skill.level}
                    <span className="text-ink-500 text-sm">/10</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
