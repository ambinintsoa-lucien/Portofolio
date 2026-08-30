import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setShowTop(scrollTop > 600)
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-[3px] z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-neon-pink via-hud-blue to-neon-violet transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Retour en haut"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center bg-base-800/90 border border-white/15 backdrop-blur-sm hover:border-hud-blue hover:text-hud-blue text-ink-300 transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  )
}
