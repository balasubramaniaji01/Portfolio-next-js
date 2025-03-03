import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative w-full">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <TracingBeam className="px-4">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </TracingBeam>
          <Footer />
        </div>
      </div>
    </main>
  )
}

