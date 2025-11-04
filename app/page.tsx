import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { TechRoadmap } from "@/components/tech-roadmap"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { AIChatbot } from "@/components/ai-chatbot"
import { ScrollNavigation } from "@/components/scroll-navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechRoadmap />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <AIChatbot />
      <ScrollNavigation />
    </div>
  )
}
