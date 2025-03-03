"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      {
        title: "React.js",
        description: "Building interactive UIs with modern React and hooks",
      },
      {
        title: "Next.js",
        description: "Full-stack React applications with SSR and SSG",
      },
      {
        title: "React Native",
        description: "Cross-platform mobile app development",
      },
      {
        title: "JavaScript (ES6+)",
        description: "Modern JavaScript features and best practices",
      },
      {
        title: "HTML5 & CSS3",
        description: "Semantic markup and modern styling",
      },
      {
        title: "Redux",
        description: "State management for complex applications",
      },
    ],
  },
  {
    id: "ui",
    title: "UI Frameworks",
    skills: [
      {
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
      },
      {
        title: "Aceternity UI",
        description: "React components that implement styling and animations",
      },
      {
        title: "Material UI",
        description: "React components that implement Material Design",
      },
      {
        title: "Bootstrap",
        description: "Responsive front-end framework",
      },
      {
        title: "Semantic UI",
        description: "Development framework for responsive layouts",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      {
        title: "Git",
        description: "Version control and collaboration",
      },
      {
        title: "Webpack",
        description: "Module bundler for modern JavaScript apps",
      },
      {
        title: "Jest",
        description: "JavaScript testing framework",
      },
      {
        title: "Figma",
        description: "Design UI/Ux",
      },
      {
        title: "React Testing Library",
        description: "Testing utilities for React components",
      },
    ],
  },
  {
    id: "apis",
    title: "APIs",
    skills: [
      {
        title: "RESTful APIs",
        description: "Building and consuming REST APIs",
      },
      {
        title: "Axios",
        description: "Promise based HTTP client",
      },
      {
        title: "Fetch API",
        description: "Modern interface for fetching resources",
      },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" subtitle="My Technical Expertise" />

        <div className="mt-12">
          <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "relative overflow-hidden",
                    activeTab === category.id &&
                      "before:absolute before:inset-0 before:bg-primary/20 before:animate-pulse",
                  )}
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <HoverEffect items={category.skills} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

