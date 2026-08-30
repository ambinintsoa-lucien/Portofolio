export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-base-900 border-t border-white/5 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm tracking-[0.25em] text-ink-500">PORTFOLIO</p>

        <ul className="flex items-center gap-6 font-head text-sm text-ink-500">
          <li>
            <a href="mailto:ton.email@example.com" className="hover:text-neon-blue transition-colors">
              Email
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/ton-profil" className="hover:text-neon-blue transition-colors">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/ton-profil" className="hover:text-neon-blue transition-colors">
              GitHub
            </a>
          </li>
        </ul>

        <p className="text-xs text-ink-500/70">© {2026} Lucien RAKOTOAMBININTSOA. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
