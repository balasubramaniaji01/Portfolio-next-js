"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Introduction" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=400')] bg-cover bg-center rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 h-24 w-24 bg-purple-600/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Frontend & Mobile Developer with a passion for creating exceptional digital experiences
            </h3>
            <p className="text-foreground/80 mb-6">
              Results-driven Frontend & Mobile Developer with 2+ years of experience in building responsive web and
              mobile applications using React JS, Next JS, React Native, JavaScript (ES6+), HTML5, and CSS3. Proficient in state
              management (Redux), API integration (RESTful APIs, Axios, Fetch API), and UI frameworks like Semantic UI
              and Bootstrap.
            </p>
            <p className="text-foreground/80 mb-8">
              Experienced in SCORM integration, ensuring cross-browser compatibility, and optimizing performance for
              seamless user experiences. Skilled in UI/UX design using Figma, translating designs into high-quality,
              scalable applications.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-primary mb-1">2+</h4>
                  <p className="text-sm text-foreground/70">Years of Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                  <p className="text-sm text-foreground/70">Projects Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-primary mb-1">5+</h4>
                  <p className="text-sm text-foreground/70">Technologies Mastered</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

