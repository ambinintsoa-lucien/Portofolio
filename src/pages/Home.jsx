import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Stats from "../components/Stats"
import Formation from "../components/Formation"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Certifications from "../components/Certifications"
import Projects from "../components/Projects"
import Vision from "../components/Vision"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Formation />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
