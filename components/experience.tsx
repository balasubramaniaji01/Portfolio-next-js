"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "ViEntityData Pvt Ltd",
    location: "Bangalore",
    period: "October 2024 - Present",
    description: [
      "Developed cross-platform mobile and Web applications using React.js, Redux, React Native, JavaScript (ES6+), HTML5, and CSS3, ensuring seamless performance and responsiveness.",
      "UI/UX Optimization: Collaborated with designers to translate Figma prototypes into pixel-perfect, responsive UIs, improving user engagement by 25%.",
      "Integrated RESTful APIs for real-time data synchronization, reducing load times by 20%.",
      "Utilized Redux and Context API for efficient state management across mobile applications.",
    ],
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Software Developer",
    company: "HRLytics Pvt Ltd",
    location: "Bangalore",
    period: "December 2022 - September 2024",
    description: [
      "Advanced React.js Development: Developed scalable, single-page applications (SPAs) using React.js, React Router, and React Hooks, improving application performance by 35%.",
      "Code Splitting: Utilized React.lazy() and Suspense for code splitting, reducing initial load times by 30%.",
      "Designed responsive UIs using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility.",
      "Integrated RESTful APIs to enable seamless data flow between frontend and backend systems.",
    ],
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Bachelor of Engineering",
    company: "Mookambigai College Of Engineering",
    location: "Trichy, Tamil Nadu",
    period: "Graduated: June 2022",
    description: [],
    icon: <GraduationCap className="h-5 w-5" />,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" subtitle="My Professional Journey" />

        <div className="mt-12 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2 z-10`}
            >
              <Card className={`relative ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                <div
                  className={`absolute top-8 ${
                    index % 2 === 0
                      ? "md:-right-4 right-1/2 transform translate-x-1/2 md:translate-x-0"
                      : "md:-left-4 right-1/2 transform translate-x-1/2 md:translate-x-0"
                  } w-8 h-8 rounded-full bg-primary flex items-center justify-center z-20`}
                >
                  {exp.icon}
                </div>

                <CardHeader>
                  <CardTitle className="flex flex-col">
                    <span className="text-xl">{exp.title}</span>
                    <span className="text-sm font-normal text-foreground/70 mt-1">
                      {exp.company} | {exp.location}
                    </span>
                  </CardTitle>
                  <div className="text-sm text-primary font-medium">{exp.period}</div>
                </CardHeader>

                <CardContent>
                  <ul className={`list-disc ${index % 2 === 0 ? "md:text-right md:list-none" : "ml-5"}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-2 text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

