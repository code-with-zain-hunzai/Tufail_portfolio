import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
export default function Home() {
  return (
    <main className="min-h-screen pt-16 md:pt-20 ">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <BlogSection/>
      <Experience />
     <TestimonialsSection/>
     
      <Contact />
    </main>
  )
}
