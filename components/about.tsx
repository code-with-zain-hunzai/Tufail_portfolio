"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Razia Bibi",
  description:
    "Learn more about Razia Bibi, a B2B growth and digital marketing specialist focused on predictable pipeline creation.",
};
export default function About() {
  return (
    <section id="about" className="py-20  container mx-auto">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0  ">
              <Image
                src="/Raiza.jpg"
                alt="Razia Bibi portrait"
                width={450}
                height={450}
                className=" rounded-xl"
              />
              <div className="absolute" />
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                About Razia
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
            </div>

            <p className="text-muted-foreground">
              As a seasoned digital-marketing specialist, I partner with SaaS, e-commerce, B2B services, and local brands to architect full-funnel strategies that deliver measurable growth. I blend strategic planning with hands-on execution across SEO, paid media, content, social, analytics, and conversion optimization to build predictable lead pipelines.
              <br></br>
              <br></br>
              I’ve led high-visibility initiatives for LitGrey Technologies, Digital Empire Agency, Kohminds Technologies, Deliver Funding, and Optician Dynamics—elevating digital reach, increasing qualified leads, and improving conversion rates across their funnels. 
            </p>

            <div className="pt-4">
              <a href="/Raiza.pdf" download>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
