"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, TrendingUp } from "lucide-react";
import { portfolioData } from "@/data/content";

export function SeoMethod() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section id="seo-method" className="w-full py-24 px-4 md:px-8 bg-white dark:bg-[#0A1128]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Ma Méthode SEO</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une approche complète en 14 étapes pour maximiser la visibilité organique et générer une croissance durable.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline / Steps */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              {portfolioData.seoMethod.map((step, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={index}
                  className="border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-white/5"
                >
                  <button
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        activeStep === index 
                          ? "bg-brand-electric text-white" 
                          : "bg-gray-200 dark:bg-gray-800 text-gray-500"
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className={`font-semibold text-lg ${activeStep === index ? "text-brand-electric dark:text-brand-cyan" : ""}`}>
                        {step.title}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`transition-transform ${activeStep === index ? "rotate-180 text-brand-electric dark:text-brand-cyan" : "text-gray-400"}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 pt-0 ml-12 text-gray-600 dark:text-gray-300">
                          <p className="mb-2">{step.desc}</p>
                          {step.tools && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {step.tools.split(", ").map(tool => (
                                <span key={tool} className="px-2 py-1 bg-brand-electric/10 text-brand-electric dark:text-brand-cyan rounded-md text-xs font-mono font-medium">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visualisation Avant/Après */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sticky top-32 bg-gradient-to-br from-[#1E3A8A] to-[#0A1128] p-8 rounded-3xl shadow-xl text-white border border-white/10"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-heading font-bold">Impact Estimé</h3>
                <TrendingUp className="text-brand-cyan" size={24} />
              </div>
              
              <div className="relative h-48 w-full border-l border-b border-white/20 mb-4">
                {/* Simulated Chart */}
                <motion.svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <motion.path
                    d="M 0 150 Q 50 140, 100 100 T 200 40 T 300 10"
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  {/* Grid lines */}
                  <line x1="0" y1="150" x2="100%" y2="150" stroke="rgba(255,255,255,0.1)" strokeDasharray="4" />
                  <line x1="0" y1="100" x2="100%" y2="100" stroke="rgba(255,255,255,0.1)" strokeDasharray="4" />
                  <line x1="0" y1="50" x2="100%" y2="50" stroke="rgba(255,255,255,0.1)" strokeDasharray="4" />
                </motion.svg>

                {/* Plot points */}
                <motion.div 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
                  className="absolute bottom-[20%] left-[30%] w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_10px_#22D3EE]" 
                />
                <motion.div 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} viewport={{ once: true }}
                  className="absolute bottom-[60%] left-[65%] w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_10px_#22D3EE]" 
                />
                <motion.div 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} viewport={{ once: true }}
                  className="absolute bottom-[85%] right-0 w-3 h-3 bg-brand-coral rounded-full shadow-[0_0_10px_#FB7185]" 
                />
              </div>

              <div className="flex justify-between text-xs text-gray-300 font-mono">
                <span>Avant</span>
                <span>Mois 3</span>
                <span className="text-brand-coral font-bold">Mois 6</span>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                  <span className="text-sm">Trafic Organique</span>
                  <span className="text-brand-cyan font-bold">+240%</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                  <span className="text-sm">Mots-clés Top 3</span>
                  <span className="text-brand-cyan font-bold">+180%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
