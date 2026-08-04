"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const projects = [
  {
    title: "Home Help Connect",
    description:
      "A responsive web application connecting households with service providers. Features include registration, searching, filtering, and a clean user interface built using frontend technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    liveUrl: "https://homehelpconnect.vercel.app/",
    githubUrl: "https://github.com/JOSEPHJ2007/Home_connect",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Farm Connect",
    description:
      "A web platform designed to connect farmers with customers and improve accessibility to agricultural products and services. The project focuses on responsive design, usability, and clean frontend development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/JOSEPHJ2007/famconnect",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-full h-48 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                
                <div className="relative p-8 pt-12 flex flex-col h-full z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-background border border-border text-xs font-medium rounded-md shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-background border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors shadow-sm"
                      >
                        <GithubIcon width="16" height="16" className="mr-2" />
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
