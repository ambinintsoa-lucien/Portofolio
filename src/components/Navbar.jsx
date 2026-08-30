import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const LINKS = [
  { id: "hero", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "formation", label: "Formation" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Si on arrive sur "/" avec un hash (#projects) depuis une autre page, on scroll une fois montée.
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "")
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      })
    }
  }, [location])

  const handleClick = (id) => {
    setOpen(false)
    if (location.pathname !== "/") {
      navigate(`/#${id}`)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base-950/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick("hero")}
          className="font-display text-sm tracking-[0.3em] text-ink-100 hover:text-neon-blue transition-colors"
        >
          PORTFOLIO
        </button>

        <ul className="hidden md:flex items-center gap-8 font-head text-sm tracking-wide">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="relative text-ink-300 hover:text-neon-blue transition-colors duration-200 group/link"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-neon-blue transition-all duration-300 group-hover/link:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink-100 w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          aria-label="Ouvrir le menu"
        >
          <span className="w-6 h-px bg-current" />
          <span className="w-6 h-px bg-current" />
          <span className="w-6 h-px bg-current" />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-head text-sm bg-base-950/95">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="w-full text-left py-2 text-ink-300 hover:text-neon-blue transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
