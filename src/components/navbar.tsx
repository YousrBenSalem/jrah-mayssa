"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.seo, href: "#seo-method" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0A1128]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-heading font-bold text-brand-electric dark:text-brand-cyan tracking-tighter">
          MJ.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-electric dark:hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          {mounted && (
            <div className="flex items-center gap-3 ml-4">
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-electric/10 text-brand-electric dark:text-brand-cyan font-bold hover:bg-brand-electric hover:text-white dark:hover:bg-brand-cyan dark:hover:text-black transition-colors"
                aria-label="Changer de langue"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          {mounted && (
            <>
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-electric/10 text-brand-electric dark:text-brand-cyan font-bold hover:bg-brand-electric hover:text-white dark:hover:bg-brand-cyan dark:hover:text-black transition-colors"
                aria-label="Changer de langue"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#0A1128] border-b border-gray-200 dark:border-white/10 shadow-lg md:hidden"
          >
            <nav className="flex flex-col py-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 border-b border-gray-100 dark:border-white/5 last:border-none text-lg font-medium hover:text-brand-electric dark:hover:text-brand-cyan"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
