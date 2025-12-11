"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog | Razia Bibi",
  description:
    "Articles on B2B growth, SEO, paid media, conversion optimization, and full-funnel strategy.",
};

const blogPosts = [
  {
    id: 1,
    title: "Why Search Marketing & Branding Need Each Other",
    excerpt:
      "The integration of search marketing and branding isn’t just beneficial — it’s essential for modern digital success. When these strategies work together, they create a powerful foundation for sustainable growth, better customer relationships, and stronger market presence.",
    coverImage: "image (7).png",
    category: "Growth",
    readTime: "9 min read",
    date: "2025",
    slug: "https://medium.com/@razia.jahan44/why-search-marketing-branding-need-each-other-0de38f7b4e7a",
  },
  {
    id: 2,
    title: "How to Optimize Your Google My Business Listing",
    excerpt:
      "Google My Business is an invaluable tool for businesses seeking to increase local visibility, engage with customers, and drive traffic — all for free. By creating an optimized GMB profile and following these best practices, you’re setting your business up for success in local searches and beyond.",
    coverImage: "/image (6).png",
    category: "Channel Strategy",
    readTime: "7 min read",
    date: "2025",
    slug: "https://medium.com/@razia.jahan44/how-to-optimize-your-google-my-business-listing-f95d1b24ef57",
  },

  {
    id: 3,
    title: "Where Social Media Started: The story of Humanity’s Never-ending Desire to Connect",
    excerpt:
      "The story of where social media started is really the story of humanity’s never-ending desire to connect. From bulletin boards and BBS systems in the 1970s to TikTok dances and AI-driven feeds today, the evolution of social media shows how technology and culture grow together.",
    coverImage: "/image (5).png",
    category: "CRO",
    readTime: "6 min read",
    date: "2025",
    slug: "https://medium.com/@razia.jahan44/where-social-media-started-the-story-of-humanitys-never-ending-desire-to-connect-7fa862ebaf73",
  },
  {
    id: 4,
    title: "The Future of Search Is Here: 6 Surprising Things Buyers Expect in 2025",
    excerpt:
      "The future of search is less about beating algorithms and more about serving real people through structured, conversational, AI-friendly content that earns trust and earns audience share across fragmented channels.",
    coverImage: "/image (4).png",
    category: "CRO",
    readTime: "6 min read",
    date: "2025",
    slug: "https://medium.com/@razia.jahan44/the-future-of-search-is-here-6-surprising-things-buyers-expect-in-2025-c42eaf9bea1e",
  },
  {
    id: 5,
    title: "Voice Search SEO: Optimizing Your Website for Voice Queries",
    excerpt:
      "Voice search optimization is crucial for forward-thinking businesses. Conduct a thorough voice search SEO audit and optimize your content for featured snippets to capitalize on the growing trend of voice-based searches.",
    coverImage: "/image (3).png",
    category: "CRO",
    readTime: "6 min read",
    date: "2025",
    slug: "https://medium.com/@razia.jahan44/voice-search-seo-optimizing-your-website-for-voice-queries-5fd1b2166f07",
  },
];

export default function BlogSection() {
  const [hoveredPost, setHoveredPost] =useState<number | null>(null);

  return (
    <section id="blog" className="py-20 mx-auto container">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, MERN stack,
            and the latest tech trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-500"
                    style={{
                      transform:
                        hoveredPost === post.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="p-6 pb-4">
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-grow">
                  <CardDescription className="line-clamp-3 mb-4">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between items-center border-t">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1 mt-4" />
                    <span className="mt-4">{post.date}</span>
                    <span className="mx-2 mt-4">•</span>
                    <Clock className="h-4 w-4 mr-1 mt-4" />
                    <span className="mt-4">{post.readTime}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group mt-4 p-1"
                    asChild
                  >
                    <Link href={`${post.slug}`} className="flex items-center">
                      Read
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog" className="flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
