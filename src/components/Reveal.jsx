import useInView from "../hooks/useInView"

// Variantes d'apparition au scroll, une par thème de section :
// - fade   : fondu + léger glissement (Formation, Stats, Certifications, Footer...)
// - neon   : fondu + zoom léger, esprit néon (À propos)
// - hud    : glissement latéral façon "scan" HUD (Compétences, Projets)
// - circuit: fondu + zoom depuis le centre (Expérience)
// - gold   : fondu + léger déploiement vertical (Contact)
const VARIANTS = {
  fade: {
    hidden: "opacity-0 translate-y-8",
    shown: "opacity-100 translate-y-0",
  },
  neon: {
    hidden: "opacity-0 scale-95",
    shown: "opacity-100 scale-100",
  },
  hud: {
    hidden: "opacity-0 -translate-x-6",
    shown: "opacity-100 translate-x-0",
  },
  "hud-right": {
    hidden: "opacity-0 translate-x-6",
    shown: "opacity-100 translate-x-0",
  },
  circuit: {
    hidden: "opacity-0 scale-90",
    shown: "opacity-100 scale-100",
  },
  gold: {
    hidden: "opacity-0 -translate-y-4",
    shown: "opacity-100 translate-y-0",
  },
}

export default function Reveal({
  children,
  variant = "fade",
  delay = 0,
  duration = 700,
  className = "",
  as: Tag = "div",
}) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const v = VARIANTS[variant] || VARIANTS.fade

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${inView ? v.shown : v.hidden} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
