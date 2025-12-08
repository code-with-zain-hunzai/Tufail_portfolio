import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin,  Mail, ArrowRight, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" border-t container mx-auto">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Razia Bibi</h3>
            <p className="text-sm text-muted-foreground mb-4">
              B2B Growth & Digital Marketing Specialist focused on predictable lead pipelines across SEO, paid media, and CRO.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/razia-digital-marketer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.upwork.com"
                aria-label="Upwork"
                className="p-2 rounded-full bg-[#6fda44] hover:bg-[#5bc236] text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <img src="/upwork.png" alt="Upwork" className="h-5 w-5" />
              </a>
              <a
                href="mailto:razia.jahan44@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="text-foreground/70 hover:text-primary transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-foreground/70 hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4"> Contact Info </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/70">
                <span className="font-medium">Email:</span> razia.jahan44@gmail.com
              </li>
              <li className="text-foreground/70">
                <span className="font-medium">Phone:</span> +92 316 4608988
              </li>
              <li className="text-foreground/70">
                <span className="font-medium">Location:</span> Pakistan (remote / global)
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates on my latest projects and tech articles.
            </p>
            {/* <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button size="icon" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4"  />
              </Button>
            </div> */}
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Razia Bibi. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
