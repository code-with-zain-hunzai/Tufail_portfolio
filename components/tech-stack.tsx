"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Toolkit | Tufail",
  description:
    "The growth, analytics, and marketing tools Tufail uses to build predictable lead engines.",
}


const techStack = [
  { name: "Google Analytics 4", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" },
  { name: "Google Tag Manager", icon: "https://cdn.simpleicons.org/googletagmanager" },
  { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads" },
  { name: "Meta Ads", icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
  { name: "LinkedIn Ads", icon: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" },
  { name: "Ahrefs / SEMrush", icon: "https://www.vectorlogo.zone/logos/semrush/semrush-icon.svg" },
  { name: "SEO & On-Page", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Conversion Copy & CRO", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "Mailchimp / ActiveCampaign", icon: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg" },
  { name: "WordPress / Shopify", icon: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
  { name: "Data Studio / Looker", icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
  { name: "Canva / Creative", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-background container mx-auto">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Toolkit</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and platforms I use to plan, launch, and scale predictable growth programs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300 hover:border-primary/50 group bg-background">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="relative w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-medium text-center">{tech.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
