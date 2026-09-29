"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { portfolioData } from "@/data/content";

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="w-full py-24 px-4 md:px-8 bg-white dark:bg-[#0A1128]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-brand-electric mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="group cursor-pointer bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-electric/30 transition-all"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="aspect-video bg-gray-200 dark:bg-white/10 relative overflow-hidden flex items-center justify-center">
                {/* Fallback pattern if image is missing */}
                <Award size={48} className="text-gray-400 dark:text-gray-600 opacity-50 absolute" />
                <div 
                  className="w-full h-full bg-cover bg-center z-10 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  style={{ backgroundImage: `url(${cert.image})` }} 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20" />
              </div>
              <div className="p-5">
                <h3 className="font-bold font-heading text-lg mb-1 line-clamp-2" title={cert.name}>
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-3">
                  {cert.issuer}
                </p>
                <div className="inline-flex px-2 py-1 bg-brand-electric/10 text-brand-electric dark:text-brand-cyan text-xs font-semibold rounded uppercase tracking-wider">
                  Valide : {cert.validUntil}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-cyan bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="w-full h-full bg-contain bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${selectedImage})` }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
