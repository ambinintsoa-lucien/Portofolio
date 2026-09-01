import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Remet la page en haut à chaque changement de route,
// sauf si l'URL contient un hash (ex: /#projects) — dans ce cas
// Navbar.jsx gère déjà le scroll vers la bonne section.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}