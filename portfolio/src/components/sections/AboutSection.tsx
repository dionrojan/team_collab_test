"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Users, Zap } from "lucide-react";

const traits = [
  { icon: Brain, title: "Problem Solver", desc: "Tackling complex logic" },
  { icon: Zap, title: "Quick Learner", desc: "Adapting to new tech" },
  { icon: Users, title: "Team Player", desc: "Collaborating effectively" },
  { icon: Rocket, title: "Continuous Learner", desc: "Always exploring" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px]" />
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center relative z-10">
              I am currently pursuing a Bachelor of Technology in Computer Science at Amal Jyothi College of Engineering. I enjoy developing responsive websites and exploring software engineering concepts. I am passionate about learning new technologies and building projects that solve real-world problems. I am actively seeking internship opportunities to enhance my technical skills and gain industry experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-blue-500">
                  <trait.icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{trait.title}</h3>
                <p className="text-xs text-muted-foreground">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
