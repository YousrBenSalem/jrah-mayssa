"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

function SkillMarquee({ items, direction = "left", speed = 40 }: { items: string[], direction?: "left" | "right", speed?: number }) {
  return (
    <div className="relative w-full overflow-hidden flex bg-white/5 py-4 border-y border-white/5 my-4">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-[#0A1128] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-[#0A1128] to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap items-center min-w-max gap-8 px-4"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="px-6 py-3 bg-white dark:bg-white/10 rounded-full shadow-sm font-medium border border-gray-100 dark:border-white/10 text-gray-700 dark:text-gray-200"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-gray-50 dark:bg-[#0A1128]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Compétences & Outils</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <SkillMarquee items={portfolioData.skills.seo} direction="left" speed={30} />
        <SkillMarquee items={[...portfolioData.skills.analytics, ...portfolioData.skills.creation]} direction="right" speed={35} />
        <SkillMarquee items={[...portfolioData.skills.office, ...portfolioData.skills.soft]} direction="left" speed={40} />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.languages.map((lang, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10 flex items-center justify-between"
            >
              <h3 className="font-bold font-heading text-xl">{lang.name}</h3>
              <span className="text-brand-electric dark:text-brand-cyan font-medium">{lang.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
