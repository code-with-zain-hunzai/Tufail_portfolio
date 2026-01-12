"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Tufail",
  description:
    "Explore Tufail's growth marketing engagements, roles, achievements, and channel expertise.",
};

const experienceData = [
  {
    id: 1,
    role: "Growth Strategist",
    company: "LitGrey Technologies",
    period: "Engagement",
    description:
      "Enhanced web presence and content strategy for a software/ERP brand, strengthening positioning across education and ERP segments.",
    achievements: [
      "Rebuilt SEO and content roadmap to improve qualified traffic quality",
      "Aligned messaging and landing pages to core ICPs to increase lead intent",
      "Implemented reporting cadence tying search visibility to pipeline outcomes",
    ],
    technologies: [
      "SEO",
      "Content Strategy",
      "Analytics",
      "Conversion Copy",
      "On-page SEO",
      "Reporting",
    ],
  },
  {
    id: 2,
    role: "Demand Generation Specialist",
    company: "Digital Empire Agency",
    period: "Engagement",
    description:
      "Amplified lead generation through paid search and social while tightening inbound conversion rates with improved funnel strategy.",
    achievements: [
      "Built multi-channel campaigns aligned to revenue KPIs",
      "Introduced structured A/B testing for landing pages and creative",
      "Optimized budgets toward high-intent segments to reduce CPA",
    ],
    technologies: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Funnel Optimization",
      "Conversion Tracking",
    ],
  },
  {
    id: 3,
    role: "Brand & Awareness Lead",
    company: "Kohminds Technologies",
    period: "Engagement",
    description:
      "Built brand awareness and thought leadership for enterprise AI and web services through social content and LinkedIn growth.",
    achievements: [
      "Created editorial calendars tailored to enterprise decision-makers",
      "Launched LinkedIn content sprints that improved engagement quality",
      "Partnered with design/dev to keep messaging and UX consistent",
    ],
    technologies: [
      "Social Strategy",
      "Content Systems",
      "LinkedIn",
      "Campaign Creative",
      "Brand Positioning",
    ],
  },
  {
    id: 4,
    role: "Acquisition Consultant",
    company: "Deliver Funding",
    period: "Engagement",
    description:
      "Streamlined the digital acquisition funnel for a business-loan fintech across paid search, social ads, and landing page optimization.",
    achievements: [
      "Built paid search and social structures focused on application velocity",
      "Optimized landing flows to shorten time-to-application",
      "Established clear conversion tracking and weekly performance reviews",
    ],
    technologies: [
      "Paid Search",
      "Paid Social",
      "Landing Page CRO",
      "Analytics",
      "Lead Routing",
    ],
  },
  {
    id: 5,
    role: "Growth Advisor",
    company: "Optician Dynamics",
    period: "Engagement",
    description:
      "Supported digital presence and referral/lead-gen campaigns for an optical practice SaaS, aiding practice-client adoption.",
    achievements: [
      "Refined messaging to practice managers and optical leaders",
      "Launched referral and nurture sequences to warm inbound leads",
      "Aligned campaign reporting to activation and adoption metrics",
    ],
    technologies: [
      "Email Automation",
      "Referral Programs",
      "Lifecycle Nurture",
      "Analytics",
      "Landing Pages",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 container mx-auto">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to
            work with.
          </p>
        </div>

        {/* Timeline container with responsive adjustments */}
        <div className="relative md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-px md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-border md:before:to-transparent">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot - hidden on mobile, visible on md and up */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full border border-background bg-card shadow-sm shadow-foreground/5 z-10">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
              </div>

              {/* Mobile timeline indicator */}
              <div className="absolute left-0 top-0 flex md:hidden items-center justify-center w-8 h-8 rounded-full border border-background bg-card shadow-sm shadow-foreground/5 z-10">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </div>

              <Card
                className={`w-full md:w-[calc(50%-2.5rem)] shadow-sm hover:shadow-md transition-all duration-300 ml-10 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl">
                        {experience.role}
                      </CardTitle>
                      <CardDescription>{experience.company}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="self-start sm:self-auto whitespace-nowrap"
                    >
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {experience.description}
                  </p>

                  <div>
                    <h4 className="font-medium mb-2 text-sm sm:text-base">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
