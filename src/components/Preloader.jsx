import { useEffect, useState } from "react"

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const start = Date.now()
    const duration = 1200

    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setHidden(true)
        setTimeout(() => setGone(true), 500)
      }
    }

    requestAnimationFrame(tick)
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-base-950 flex flex-col items-center justify-center transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="relative flex flex-col items-center gap-4">
        <div className="relative w-16 h-16 clip-hud border border-hud-blue/60 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-hud-blue/40 to-transparent animate-scanline" />
          <span className="font-display text-lg text-hud-blue">{progress}</span>
        </div>

        <p className="font-head text-xs tracking-[0.35em] text-ink-500 uppercase">
          Chargement
        </p>

        <div className="w-48 h-[2px] bg-white/10 overflow-hidden">
          <div
            className="h-full bg-hud-blue transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
