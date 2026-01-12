"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 ">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground uppercase tracking-wider font-medium">
              B2B Growth & Digital Marketing Specialist
            </p>

            <h1 className="text-4xl font-bold  sm:text-5xl md:text-6xl lg:text-7xl">
              Tufail Predictable Pipeline Builder
            </h1>

            <div className="w-20 h-1 bg-primary mb-6 mx-auto"></div>

            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              Building predictable lead pipelines through SEO, paid media, and high-converting funnels.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <Button asChild size="lg" className="group px-6 py-6 text-base">
              <Link href="#contact">
                Contact with Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* <p className="text-sm text-muted-foreground">No credit card required • Free consultation</p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
