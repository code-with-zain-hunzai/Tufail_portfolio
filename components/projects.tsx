"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Razia Bibi",
  description:
    "Growth and digital marketing engagements focused on predictable pipeline creation across SEO, paid media, and conversion funnels.",
}


const projectsData = [
  {
    id: 1,
    title: "LitGrey Technologies",
    description:
      "Enhanced web presence and SEO/content strategy for a software/ERP provider, strengthening positioning across education and ERP domains.",
    image: "/image.png",
    tags: ["SEO", "Content Strategy", "Positioning", "Analytics"],
    demoUrl: "https://www.litgreytechnologies.com/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Digital Empire Agency",
    description:
      "Amplified lead generation through paid social and search, improving inbound conversion rates with funnel and landing-page optimization.",
    image: "/image (1).png",
    tags: ["Google Ads", "Meta Ads", "CRO", "Lead Gen"],
    demoUrl: "https://digitalempireagency.com",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Kohminds Technologies",
    description:
      "Built brand awareness and thought leadership through social content, LinkedIn growth, and digital campaigns for enterprise AI/web development services.",
    image: "/kohminds.png",
    tags: ["LinkedIn", "Content", "Social Campaigns", "Brand"],
    demoUrl: "https://www.kohminds.com",
    githubUrl: "",
  },
  {
    id: 4,
    title: "WayPoint Driving School",
    description: "Worked with Waypoint Driving to strengthen their organic digital presence through content strategy, social media management, and brand positioning. Focused on increasing visibility, engagement, and inbound leads using consistent, value-driven organic marketing efforts.",
    image: "/image (2).png",
    tags: ["LinkedIn", "Content", "Social Campaigns", "Brand"],
    demoUrl: "https://www.waypointdriving.com/",
    githubUrl: "",
  },
   {
    id: 5,
    title: "fitwithshama",
    description:"Managed the Instagram content for @fitwithshama by planning, creating, and publishing posts, optimizing captions and hashtags, and engaging with the audience to grow brand visibility and interaction.",
    image: "/insta1.png",
    tags: ["Digital Marketing", "Instagram Marketing", ," Organic Growth", "Content Strategy", "Content", "Social Campaigns", "Brand"],
    demoUrl: "",
    githubUrl: "https://www.instagram.com/fitwithshama/",
  },
  {
    id: 6,
    title: "Fraser Stevens Learning",
    description:"Managed the Instagram presence for @kate_fslearning by developing and executing organic growth strategies, curating content, and optimizing engagement to strengthen brand awareness and audience interaction.",
    image: "/insta2.png",
    tags: ["LinkedIn", "Content", "Social Campaigns", "Brand" ,"Digital Marketing", "Instagram Marketing", ," Organic Growth", "Content Strategy", ],
    demoUrl: "https://www.instagram.com/kate_fslearning/",
    githubUrl: "",
  },

  
  
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (

    <div className="py-20 ">

    <section id="projects" className=" container mx-auto" >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent full-stack projects built with the MERN stack. Each project demonstrates
            different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  {/* <Button asChild variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button> */}
                  <Button asChild size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
    
    </div>
  )
}
