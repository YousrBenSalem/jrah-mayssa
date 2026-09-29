"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Hero() {
  const { data: portfolioData, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-electric/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/30 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Profile image - no animation wrapper so it shows immediately */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-brand-electric to-brand-cyan">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/assets/mayssa.jpg"
                alt="Mayssa Jrah"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#1E3A8A] text-brand-electric dark:text-brand-cyan text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-gray-100 dark:border-white/10 whitespace-nowrap"
          >
            {portfolioData.hero.availability}
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-extrabold mb-4 tracking-tight"
        >
          {portfolioData.hero.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-6 max-w-2xl"
        >
          {portfolioData.hero.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-brand-electric dark:text-brand-cyan mb-10 font-mono font-semibold"
        >
          {portfolioData.hero.catchphrase}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href={portfolioData.hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-electric hover:bg-brand-deep text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-brand-electric/30"
          >
            <Download size={20} />
            {t.misc.downloadCv}
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/20 text-foreground rounded-full font-semibold transition-all border border-gray-200 dark:border-white/10"
          >
            {t.misc.contactMe}
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
