import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { PageControls } from "@/components/page-controls"

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageControls />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
