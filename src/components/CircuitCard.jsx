// Carte au fond "circuit imprimé" animé, inspirée de la maquette carte de visite.
// Les tracés du circuit sont décoratifs (SVG) ; 3 points lumineux ("neurones")
// circulent en boucle le long de certains tracés via <animateMotion>.
export default function CircuitCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#050b16] border border-cyan-400/15 ${className}`}
    >
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-80"
      >
        <defs>
          <filter id="glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="120" r="90" fill="url(#coreGlow)" />

        {/* circuit traces */}
        <g fill="none" stroke="#2dd4ea" strokeOpacity="0.35" strokeWidth="1.4">
          <path id="trace1" d="M0,40 L60,40 L60,90 L150,90 L150,60 L200,60" />
          <path id="trace2" d="M0,190 L50,190 L50,140 L120,140 L120,170 L200,170" />
          <path id="trace3" d="M400,50 L340,50 L340,100 L260,100 L260,70 L200,70" />
          <path id="trace4" d="M400,200 L350,200 L350,150 L280,150 L280,180 L200,180" />
          <path d="M0,110 L30,110 L30,130 L70,130" />
          <path d="M400,120 L370,120 L370,140 L330,140" />
        </g>

        {/* nodes */}
        <g fill="#050b16" stroke="#4de3fa" strokeWidth="1.4">
          {[
            [60, 40],
            [150, 60],
            [50, 190],
            [120, 170],
            [340, 50],
            [260, 70],
            [350, 200],
            [280, 180],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.5" />
          ))}
        </g>

        {/* traveling glow dots ("neurones") */}
        {["trace1", "trace2", "trace3", "trace4"].map((id, i) => (
          <circle key={id} r="3" fill="#7ff2ff" filter="url(#glow)">
            <animateMotion
              dur={`${4.5 + i * 1.1}s`}
              repeatCount="indefinite"
              begin={`${i * 0.7}s`}
            >
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
