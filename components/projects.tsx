"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const projects = [
  {
    id: 1,
    title: "User Data Management System",
    description: "Built with React and Semantic UI, improving data handling efficiency by 20%.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Semantic UI", "Redux", "RESTful API"],
    link: "#",
    github: "#",
    details:
      "A comprehensive user data management system that allows administrators to efficiently manage user information, permissions, and activities. The application features a responsive dashboard, real-time data updates, and advanced filtering capabilities.",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Developed a scalable React-based platform, increasing user engagement by 30%.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    details:
      "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, payment processing, and order management. The application was built with performance and scalability in mind, resulting in a 30% increase in user engagement.",
  },
  {
    id: 3,
    title: "Movie Search App",
    description: "Created using React and OMDB API, featuring real-time search and favorites management.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "OMDB API", "CSS3", "LocalStorage"],
    link: "#",
    github: "#",
    details:
      "A movie search application that allows users to search for movies, view details, and save favorites. The app features real-time search results, responsive design, and persistent storage of user preferences using LocalStorage.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projectItems = projects.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.link,
  }))

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="My Recent Work" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="rounded-[22px] p-1 bg-white dark:bg-zinc-900">
                <SpotlightCard>
                  <div className="relative overflow-hidden rounded-2xl h-full">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>

                      <div className="flex justify-between items-center">
                        <Button variant="ghost" onClick={() => setSelectedProject(project)}>
                          View Details
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="outline" size="icon" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <HoverEffect items={projectItems} />
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <div
                className="w-full h-64 bg-cover bg-center rounded-md mb-4"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              />
              <p className="text-muted-foreground">{selectedProject.details}</p>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button variant="outline" asChild>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
              <Button asChild>
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

