"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Code2, Presentation, GitBranch } from "lucide-react";

const placeholders = [
  { icon: Trophy, title: "Hackathons", desc: "Participated and won in coding challenges" },
  { icon: Award, title: "Certifications", desc: "Professional tech certifications" },
  { icon: Code2, title: "Coding Competitions", desc: "Top ranks in competitive programming" },
  { icon: Presentation, title: "Workshops", desc: "Attended and conducted tech workshops" },
  { icon: GitBranch, title: "Open Source", desc: "Contributions to open source projects" },
];

export function AchievementsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {placeholders.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm opacity-70 hover:opacity-100"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 text-foreground/70">
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
                <span className="mt-4 px-2 py-1 bg-muted text-muted-foreground text-[10px] uppercase font-bold rounded">Coming Soon</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
