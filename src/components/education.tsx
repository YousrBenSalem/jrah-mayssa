"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="w-full py-24 px-4 md:px-8 bg-gray-50 dark:bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Formation</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-white dark:bg-[#0A1128] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-brand-electric/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-electric/10 text-brand-electric dark:text-brand-cyan rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading group-hover:text-brand-electric dark:group-hover:text-brand-cyan transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {edu.school}
                  </p>
                </div>
              </div>
              <div className="md:text-right font-mono text-sm text-gray-500 whitespace-nowrap bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-lg self-start md:self-auto">
                {edu.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
