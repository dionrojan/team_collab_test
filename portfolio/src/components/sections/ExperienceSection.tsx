"use client";

import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Seeking Opportunities</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Currently seeking internship opportunities in Software Development and Web Development to apply my skills, learn from experienced professionals, and contribute to impactful projects.
              </p>
              
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity shadow-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
