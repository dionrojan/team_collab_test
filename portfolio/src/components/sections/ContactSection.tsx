"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    // Use an environment variable for the access key, or a placeholder if missing
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Me</h3>
                  <Link href="mailto:josephjthottupuram@gmail.com" className="text-muted-foreground hover:text-blue-500 transition-colors break-all">
                    josephjthottupuram@gmail.com
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Me</h3>
                  <a href="tel:+917306861012" className="text-muted-foreground hover:text-purple-500 transition-colors">
                    +91 7306861012
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Kerala, India
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
              
              <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow resize-none"
                  ></textarea>
                </div>
                
                {error && (
                  <div className="flex items-center text-red-500 text-sm mt-2">
                    <AlertCircle size={16} className="mr-2" />
                    {error}
                  </div>
                )}
                
                {isSuccess && (
                  <div className="flex items-center text-emerald-500 text-sm mt-2">
                    <CheckCircle2 size={16} className="mr-2" />
                    Message sent successfully! I will get back to you soon.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className={`mr-2 h-5 w-5 ${isSubmitting ? "animate-pulse" : ""}`} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
