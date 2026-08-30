import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ExternalLink } from "lucide-react"
import projects from "../data/projects"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24">
          <h1 className="font-display text-2xl text-ink-100">Projet introuvable</h1>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-hud-blue font-head text-sm"
          >
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-950 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-head text-ink-500 hover:text-hud-blue transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Retour aux projets
          </Link>

          <div className="p-[2px] clip-hud bg-gradient-to-br from-hud-blue/70 via-hud-blue/20 to-hud-blue/70">
            <div className="clip-hud bg-base-800 aspect-video flex items-center justify-center overflow-hidden p-4">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-[60%] max-h-72 w-auto h-auto object-contain"
                />
              ) : (
                <span className="font-head text-xs tracking-widest text-ink-500 uppercase">
                  Image du projet
                </span>
              )}
            </div>
          </div>

          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
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

          <h1 className="mt-4 font-display text-3xl md:text-4xl text-ink-100">
            {project.title}
          </h1>

          <p className="mt-6 text-ink-300 leading-relaxed">{project.longText || project.text}</p>

          {project.tech?.length > 0 && (
            <div className="mt-8">
              <p className="font-head text-xs tracking-[0.25em] text-ink-500 uppercase mb-3">
                Technologies utilisées
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-head text-ink-100 bg-base-800 border border-white/10 px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.link && project.link !== "#" && (

            <a href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-hud-blue text-base-950 font-head text-sm tracking-wide uppercase hover:bg-white transition-colors duration-200"
            >
              Voir le site / repo <ExternalLink size={15} />
            </a>
          )}
        </div>
      </main >
      <Footer />
    </>
  )
}