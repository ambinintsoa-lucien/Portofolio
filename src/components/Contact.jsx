import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Reveal from "./Reveal"

// 1. Crée un compte gratuit sur https://www.emailjs.com
// 2. Ajoute un "Email Service" (ex: Gmail) puis un "Email Template"
// 3. Remplace les 3 valeurs ci-dessous par les tiennes (Service ID, Template ID, Public Key)
const EMAILJS_SERVICE_ID = "service_imys9jf"
const EMAILJS_TEMPLATE_ID = "template_tjk9i05"
const EMAILJS_PUBLIC_KEY = "bs-Hgi6q8SEWDqKar"

const CONTACT_INFO = [
  { label: "Email", value: "lucien.rakotoambinintsoa@student.passerellesnumeriques.org", href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" },
  { label: "Téléphone", value: "+261 07 787 35", href: "tel:+261380778735" },
  { label: "LinkedIn", value: "Lucine RAKOTOAMBININTSOA", href: "https://www.linkedin.com/feed/" },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState("idle") // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("sending")

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus("sent")
        formRef.current.reset()
      })
      .catch(() => setStatus("error"))
  }

  return (
    <section id="contact" className="relative py-28 px-6 bg-base-950">
      <div className="max-w-3xl mx-auto">
        <Reveal variant="fade" className="mb-14 text-center">
          <p className="font-head text-sm tracking-[0.3em] text-gold-500 uppercase mb-3">
            Travaillons ensemble
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-100">Contact</h2>
        </Reveal>

        <Reveal variant="gold">
          <div className="p-[2px] clip-corners bg-gradient-to-br from-gold-400 via-gold-600 to-gold-400 shadow-gold transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(201,161,95,0.5)]">
            <div className="clip-corners bg-base-900 p-8 md:p-12">
              <ul className="grid sm:grid-cols-3 gap-4 mb-10 min-w-0">
                {CONTACT_INFO.map((item) => (
                  <li key={item.label} className="min-w-0">
                    
                    <a  href={item.href}
                      className="block min-w-0 border border-gold-600/40 hover:border-gold-400 px-4 py-3 text-center transition-colors duration-200"
                    >
                      <span className="block font-head text-[11px] tracking-[0.2em] text-gold-500 uppercase">
                        {item.label}
                      </span>
                      <span className="block mt-1 text-sm text-ink-300 break-words">
                        {item.value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Nom"
                    required
                    className="bg-base-800 border border-white/10 focus:border-gold-400 outline-none px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="bg-base-800 border border-white/10 focus:border-gold-400 outline-none px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                  required
                  className="bg-base-800 border border-white/10 focus:border-gold-400 outline-none px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 justify-self-start px-8 py-3 bg-gold-500 hover:bg-gold-400 text-base-950 font-head text-sm tracking-[0.15em] uppercase transition-colors duration-200 disabled:opacity-60"
                >
                  {status === "sending" ? "Envoi..." : "Envoyer le message"}
                </button>

                {status === "sent" && (
                  <p className="text-sm text-formation-green">Message envoyé, merci !</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Une erreur est survenue. Réessaie plus tard.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}