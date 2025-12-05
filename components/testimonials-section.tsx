"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testimonials | Razia Bibi",
  description:
    "What partners say about working with Razia on growth and digital marketing.",
}

// Sample testimonial data - in a real app, this would come from an API or CMS
const testimonials = [
  {
    id: 1,
    content:
      "Razia tightened our positioning and rebuilt our content/SEO program. We now see qualified traffic that actually converts into pipeline.",
    author: "Marketing Lead",
    position: "Growth",
    company: "LitGrey Technologies",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 2,
    content:
      "She built paid social/search programs that fed our sales team with consistent, high-intent leads and improved our inbound conversion rates.",
    author: "Performance Director",
    position: "Demand Gen",
    company: "Digital Empire Agency",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Razia's landing page and funnel experiments gave us faster application volume without sacrificing quality. Clear reporting and fast iterations.",
    author: "Head of Growth",
    position: "Acquisition",
    company: "Deliver Funding",
    avatar: "/placeholder.svg",
    rating: 5,
  },

  // {
  //   id: 4,
  //   content:
  //     "I hired Sheryar for a React Native project, and he delivered exactly what I needed. The work was solid, communication was clear, and everything was completed on time. Would definitely recommend him",
  //   author: "Ayesha Khan",
  //   position: "Product Manager",
  //   company: "TechNest Solutions",
  //   avatar: "/AyshaKhan.jpg",
  //   rating: 5,
  // },
  // {
  //   id: 5,
  //   content:
  //     "Great experience working with Sheryar. They quickly fixed the bugs in our n8n workflows and exactly as required, good communication. Highly recommended!",
  //   author: "Ayesha Khan",
  //   position: "Product Manager",
  //   company: "TechNest Solutions",
  //   avatar: "/AyshaKhan.jpg",
  //   rating: 5,
  // },

  // {
  //   id: 6,
  //   content:
  //     "I Hired Sheryar to boost our existing teams capacity. He integrated seamlessly and completed all tasks that were assigned to him without any problems. We will definitely be using his services again when the situation arises.",
  //   author: "Ayesha Khan",
  //   position: "Product Manager",
  //   company: "TechNest Solutions",
  //   avatar: "/AyshaKhan.jpg",
  //   rating: 5,
  // },

  // {
  //   id: 7,
  //   content:
  //     "Sheryar quickly and efficiently resolved several critical bugs in my Next.js application, improving both performance and user experience. He demonstrated strong technical expertise and clear communication throughout the project. I highly recommend him for any frontend or Next.js work!",
  //   author: "Ayesha Khan",
  //   position: "Product Manager",
  //   company: "TechNest Solutions",
  //   avatar: "/AyshaKhan.jpg",
  //   rating: 5,
  // },
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          } mr-0.5`}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate the indices for the two visible cards
  const getVisibleIndices = () => {
    const firstIndex = currentIndex % testimonials.length;
    const secondIndex = (currentIndex + 1) % testimonials.length;
    return [firstIndex, secondIndex];
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Reset the timer when manually changing slides
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Handle manual navigation
  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  const handlePrev = () => {
    prevSlide();
    resetTimer();
  };

  // Toggle pause/play
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Set up the auto-sliding interval
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  // Get the current visible indices
  const visibleIndices = getVisibleIndices();

  return (
    <section
      id="testimonials"
      className="py-20 mx-auto container overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say
            about working with me.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {visibleIndices.map((index, i) => (
                <motion.div
                  key={`${testimonials[index].id}-${i}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="h-full border-2 border-primary/10 dark:border-primary/20 shadow-lg hover:border-primary/30  dark:to-primary/10">
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <Quote className="h-10 w-10 text-primary mb-6" />
                      <p className="text-base md:text-lg mb-8 italic text-foreground/90 flex-grow line-clamp-6">
                        "{testimonials[index].content}"
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center">
                          {/* Avatar */}
                          <div className="mr-4 rounded-full overflow-hidden w-14 h-14 border-2 border-primary/20 dark:border-primary/30 shadow-sm flex-shrink-0">
                            <Image
                              src={
                                testimonials[index].avatar || "/placeholder.svg"
                              }
                              alt={testimonials[index].author}
                              width={80}
                              height={80}
                              className="object-cover w-full h-full"
                            />
                          </div>

                          {/* Author info and Rating */}
                          <div className="flex justify-between items-center w-full">
                            {/* Author Name and Position */}
                            <div>
                              <h4 className="font-semibold text-base md:text-lg">
                                {testimonials[index].author}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonials[index].position},{" "}
                                {testimonials[index].company}
                              </p>
                            </div>

                            {/* Star Rating aligned right */}
                            <div>
                              <StarRating rating={testimonials[index].rating} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetTimer();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    visibleIndices.includes(index)
                      ? "bg-primary scale-125"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full hover:bg-primary hover:text-white transition-colors "
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
