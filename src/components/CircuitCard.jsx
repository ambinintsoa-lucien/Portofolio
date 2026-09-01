// Carte simple avec le fond sombre du style "circuit", sans les tracés/animations
// qui réduisaient la lisibilité du contenu.
export default function CircuitCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#050b16] border border-cyan-400/15 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}