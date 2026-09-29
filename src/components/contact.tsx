"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Car } from "lucide-react";
import { portfolioData } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-4 md:px-8 bg-white dark:bg-[#0A1128]">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Me Contacter</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Prête à relever de nouveaux défis. N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-white/5 p-10 rounded-3xl border border-gray-100 dark:border-white/10 space-y-6"
        >
          {/* Email */}
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="flex items-center gap-5 text-gray-600 dark:text-gray-300 hover:text-brand-electric dark:hover:text-brand-cyan transition-colors group"
          >
            <div className="p-4 bg-white dark:bg-[#0A1128] rounded-2xl group-hover:scale-110 transition-transform shadow-sm shrink-0">
              <Mail size={28} className="text-brand-electric dark:text-brand-cyan" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Email</p>
              <span className="font-semibold text-lg">{portfolioData.contact.email}</span>
            </div>
          </a>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          {/* LinkedIn */}
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 text-gray-600 dark:text-gray-300 hover:text-brand-electric dark:hover:text-brand-cyan transition-colors group"
          >
            <div className="p-4 bg-white dark:bg-[#0A1128] rounded-2xl group-hover:scale-110 transition-transform shadow-sm shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-electric dark:text-brand-cyan">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">LinkedIn</p>
              <span className="font-semibold text-lg">Mayssa Jrah</span>
            </div>
          </a>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          {/* Location */}
          <div className="flex items-center gap-5 text-gray-600 dark:text-gray-300">
            <div className="p-4 bg-white dark:bg-[#0A1128] rounded-2xl shadow-sm shrink-0">
              <Globe size={28} className="text-brand-electric dark:text-brand-cyan" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Mobilité</p>
              <span className="font-semibold text-lg">{portfolioData.contact.location}</span>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          {/* Driver License */}
          <div className="flex items-center gap-5 text-gray-600 dark:text-gray-300">
            <div className="p-4 bg-white dark:bg-[#0A1128] rounded-2xl shadow-sm shrink-0">
              <Car size={28} className="text-brand-electric dark:text-brand-cyan" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Permis</p>
              <span className="font-semibold text-lg">{portfolioData.contact.driverLicense}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
