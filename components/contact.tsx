"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Github } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Razia Bibi",
  description:
    "Get in touch with Razia Bibi for growth strategy, paid media, SEO, and conversion optimization engagements.",
}

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const accessKey = process.env.NEXT_PUBLIC_FORM_API_KEY

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...values,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })

        form.reset()
      } else {
        toast({
          title: "Something went wrong.",
          description: result.message || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 mx-auto container">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="relative overflow-hidden">
            {/* <div
  className="absolute inset-0 z-0 dark:opacity-30  opacity-30"
  style={{
    backgroundImage: "url('map.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  }}
/> */}

              <div className="relative z-10">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">razia.jahan44@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+92 316 4608988</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">Pakistan (remote / global)</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="font-medium mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                    <div className="flex space-x-4 my-4">
                      <a
                        href="https://www.upwork.com"
                        aria-label="Upwork"
                        className="p-2 rounded-full bg-[#6fda44] hover:bg-[#5bc236] text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                      >
                        <img src="/upwork.png" alt="Upwork" className="h-10 w-10 rounded-full" />
                      </a>

                      <a
                        href="https://www.linkedin.com"
                        aria-label="LinkedIn"
                        className="p-2 rounded-full hover:bg-[#29b2fe] bg-[#008dd2] text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                      >
                        <img src="/linkedin.webp" alt="LinkedIn" className="h-10 w-10" />
                      </a>

                      <a
                        href="mailto:razia.jahan44@gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                      >
                        <Mail className="h-6 w-6" />
                      </a>
                    </div>

                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...form.register("name")}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
                <p className="text-sm text-destructive mt-1">{form.formState.errors.name?.message}</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
                <p className="text-sm text-destructive mt-1">{form.formState.errors.email?.message}</p>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...form.register("subject")}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
               <p className="text-sm text-destructive mt-1">{form.formState.errors.message?.message}</p>

              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  {...form.register("message")}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  rows={4}
                />
                <p className="text-sm text-destructive mt-1">{form.formState.errors.message?.message}</p>
              </div>

              <button
  type="submit"
  disabled={isSubmitting}
  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition disabled:opacity-50"
>
  {isSubmitting ? "Sending..." : "Send Message"}
</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
