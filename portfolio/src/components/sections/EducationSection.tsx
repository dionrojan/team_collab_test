"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {/* Timeline Item */}
            <div className="relative pl-0 md:pl-20">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-[1.625rem] top-8 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-background" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group hover:border-blue-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Technology</h3>
                    <p className="text-lg text-blue-500 font-medium mb-4">Computer Science</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <GraduationCap className="w-5 h-5 mr-3 text-foreground/50" />
                        <span>Amal Jyothi College of Engineering (Autonomous)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-5 h-5 mr-3 text-foreground/50" />
                        <span>Kerala, India</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3 min-w-[200px] md:items-end">
                    <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border">
                      <Calendar className="w-4 h-4 mr-2" />
                      Expected 2029
                    </div>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-bold border border-blue-500/20">
                      <Award className="w-4 h-4 mr-2" />
                      CGPA: 8.74
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
