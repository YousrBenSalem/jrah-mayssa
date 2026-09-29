"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { portfolioData } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-4 md:px-8 bg-gray-50 dark:bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Expérience Professionnelle</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="relative border-l-2 border-brand-electric/30 dark:border-brand-cyan/30 ml-4 md:ml-0">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-brand-electric dark:bg-brand-cyan shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div className="md:hidden absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-brand-electric dark:bg-brand-cyan" />
              
              <div className="md:ml-12 bg-white dark:bg-[#0A1128] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-brand-electric/50 dark:hover:border-brand-cyan/50 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold font-heading group-hover:text-brand-electric dark:group-hover:text-brand-cyan transition-colors">
                    {exp.role}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-brand-electric/10 text-brand-electric dark:text-brand-cyan rounded-full text-sm font-semibold whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium">
                  <MapPin size={16} />
                  {exp.location}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
