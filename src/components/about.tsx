"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function About() {
  const { data: portfolioData, t } = useLanguage();
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 bg-gray-50 dark:bg-white/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t.titles.about}</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {portfolioData.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioData.about.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-[#0A1128] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 text-center flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform"
            >
              <span className="text-4xl md:text-5xl font-heading font-bold text-brand-electric dark:text-brand-cyan mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
