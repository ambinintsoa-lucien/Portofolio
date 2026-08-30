import visionPhoto from "../assets/vision-photo.jpg"
import Reveal from "./Reveal"

export default function Vision() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-base-900 via-[#0a1420] to-base-950">
      <Reveal variant="neon" className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl p-[3px] overflow-hidden">
          {/* Circulating gradient border */}
          <div className="absolute -inset-[60%] bg-[conic-gradient(from_0deg,#22d3ee,#a855f7,#ec4bab,#3b82f6,#22d3ee)] animate-spin-slow" />

          <div className="relative rounded-3xl bg-gradient-to-br from-[#0d2b52] via-[#0a3a72] to-[#062042] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
            <img
              src={visionPhoto}
              alt="Portrait"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border border-white/20 shrink-0"
            />

            <div className="text-center sm:text-left">
              <h3 className="font-display text-xl md:text-2xl text-white">Ma vision</h3>
              <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">
                Je suis quelqu’un qui ne lâche jamais. Lorsqu’une idée ou un objectif me tient à cœur, je m’investis pleinement pour aller jusqu’au bout. Chaque difficulté est pour moi une occasion d’apprendre, de progresser et de devenir meilleur. Je crois que la persévérance, le travail et la volonté permettent de transformer une idée en véritable réalisation.

              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
