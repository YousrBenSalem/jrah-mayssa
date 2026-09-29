"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioDataFR, portfolioDataEN, uiTranslations } from "@/data/content";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  data: typeof portfolioDataFR;
  t: typeof uiTranslations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "fr" || savedLang === "en") {
      setLang(savedLang);
    } else {
      // detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "en") setLang("en");
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const value = {
    lang,
    setLang: handleSetLang,
    data: lang === "fr" ? portfolioDataFR : portfolioDataEN,
    t: uiTranslations[lang],
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ ...value, data: portfolioDataFR, t: uiTranslations.fr }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
