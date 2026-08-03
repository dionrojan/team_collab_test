"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript"],
  },
  {
    category: "Web Technologies",
    items: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Visual Studio Code"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-6 text-gradient">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-full border border-border/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
