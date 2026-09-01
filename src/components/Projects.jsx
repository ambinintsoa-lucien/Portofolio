import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects"
import Reveal from "./Reveal"


export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)))
    return ["Tous", ...Array.from(set)]
  }, [])

  const [activeTag, setActiveTag] = useState("Tous")

  const filtered =
    activeTag === "Tous" ? projects : projects.filter((p) => p.tags?.includes(activeTag))

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-gradient-to-b from-base-900 via-[#0a1420] to-base-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal variant="fade" className="mb-10 text-center">
          <p className="font-head text-sm tracking-[0.3em] text-hud-blue uppercase mb-3">
            Réalisations
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">Projets</h2>
        </Reveal>

        {allTags.length > 2 && (
          <Reveal variant="fade" delay={100} className="flex flex-wrap justify-center gap-2 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 text-xs font-head tracking-wide uppercase border transition-colors duration-200 ${activeTag === tag
                  ? "border-hud-blue text-hud-blue bg-hud-blue/10"
                  : "border-white/15 text-ink-500 hover:border-white/40 hover:text-ink-100"
                  }`}
              >
                {tag}
              </button>
            ))}
          </Reveal>
        )}

                <div className="grid sm:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <Reveal key={project.id} variant={i % 2 === 0 ? "hud" : "hud-right"} delay={(i % 3) * 100}>
             
                           <Link
                to={`/projets/${project.id}`}
                className="group block p-[2px] clip-hud bg-gradient-to-br from-hud-blue/70 via-hud-blue/20 to-hud-blue/70 hover:shadow-hud-blue transition-all duration-300 hover:-translate-y-1"
              >
                <div className="clip-hud bg-base-800 flex flex-col">
                                                      <div className="w-full h-56 bg-base-700 flex items-center justify-center overflow-hidden p-4">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-56 w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="font-head text-xs tracking-widest text-ink-500 uppercase">
                        Image du projet
                      </span>
                    )}
                  </div>

                  <div className="p-7 flex flex-col justify-center">


                    {project.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-head tracking-wide uppercase text-hud-blue/80 border border-hud-blue/30 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="font-head text-xl tracking-wide text-ink-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">{project.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-head text-hud-blue group-hover:gap-3 transition-all duration-200 w-fit">
                      Voir le projet
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}