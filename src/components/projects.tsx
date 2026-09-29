"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-4 md:px-8 bg-white dark:bg-[#0A1128]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Projets</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => {
            const isDolceMisou = project.title.includes("Dolce");
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden rounded-3xl p-8 h-full flex flex-col justify-between ${
                  isDolceMisou 
                    ? "bg-gradient-to-br from-[#FB7185]/10 to-[#F43F5E]/5 border border-[#FB7185]/20"
                    : "bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                }`}
              >
                {/* Glow effect on hover handled by CSS or framer motion if needed, but a static background works well here */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl ${isDolceMisou ? "bg-[#FB7185]/20 text-[#E11D48]" : "bg-brand-electric/10 text-brand-electric dark:text-brand-cyan"}`}>
                    <Folder size={32} />
                  </div>
                  <span className="text-sm font-mono font-medium text-gray-500">
                    {project.date}
                  </span>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-bold font-heading mb-3 ${isDolceMisou ? "text-[#E11D48] dark:text-[#FB7185]" : ""}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* @ts-ignore - TS might complain if links is implicitly optional or not inferred perfectly */}
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.links.map((link, i) => {
                        // Extract domain name for display (e.g., clim-expert-78.com)
                        const domain = link.replace(/^https?:\/\//, '').replace(/\/$/, '');
                        return (
                          <a 
                            key={i} 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-electric/10 text-brand-electric dark:text-brand-cyan hover:bg-brand-electric hover:text-white dark:hover:bg-brand-cyan dark:hover:text-black transition-colors flex items-center gap-1"
                          >
                            <ExternalLink size={12} />
                            {domain}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <div className="text-sm font-medium text-gray-500 flex items-center gap-2 mt-auto">
                  <Folder size={16} />
                  {project.location}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
