import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const DATA_FILE = path.join(SRC_DIR, 'data', 'content.ts');

const contentFR = `
export const portfolioDataFR = {
  hero: {
    name: "MAYSSA JRAH",
    title: "Chargée de Référencement SEO & Marketing Digital",
    catchphrase: "Stratégies Data-Driven • Visibilité Accrue • Croissance Mesurable",
    availability: "Disponible : stage PFE (6 mois) dès février 2027",
    resumeUrl: "/assets/cv-mayssa-jrah.pdf",
    contactEmail: "mayssajrah12@gmail.com"
  },
  about: {
    description: "Étudiante en 2e année de Master Marketing Digital (IHEC Sfax), avec une formation en commerce et distribution. Mes expériences en création de contenu, gestion de projet, relation client et entrepreneuriat me permettent de combiner créativité, organisation et sens commercial.",
    stats: [
      { label: "Expériences pro", value: 4 },
      { label: "Certifications", value: 3 },
      { label: "Étapes méthode SEO", value: 14 },
      { label: "Entreprise créée", value: 1 }
    ]
  },
  seoMethod: [
    { title: "Recherche de mots-clés", tools: "Semrush, Ahrefs, Google Keyword Planner", desc: "Intention de recherche, volume, difficulté, longue traîne, clusters." },
    { title: "Recherche des services", tools: "", desc: "Création d'une page par service (1 page = 1 service = 1 mot-clé)." },
    { title: "Idées de contenus", tools: "AnswerThePublic, PAA, AlsoAsked, Reddit", desc: "Featured snippets, calendrier éditorial." },
    { title: "Analyse des concurrents", tools: "Semrush, Ahrefs, Similarweb, SpyFu", desc: "Gap analysis, Core Web Vitals." },
    { title: "Création de contenus SEO", tools: "SurferSEO, Grammarly", desc: "Title 50-60 car., meta description 150-160 car., champ sémantique, ALT." },
    { title: "Structure des balises", tools: "", desc: "H1/H2/H3, Title ≠ H1, Open Graph." },
    { title: "FAQ SEO", tools: "", desc: "Schema FAQPage JSON-LD, questions PAA." },
    { title: "Maillage interne", tools: "", desc: "Ancres descriptives, pages orphelines, silo thématique." },
    { title: "Backlinks", tools: "Ahrefs, Majestic, HARO, Hunter.io", desc: "Guest posting, désaveu." },
    { title: "Google Business Profile", tools: "", desc: "Fiche complète, posts, avis, cohérence NAP." },
    { title: "Redirections", tools: "", desc: "301 vs 302, pages 404, chaînes de redirections." },
    { title: "SEO technique", tools: "", desc: "Core Web Vitals, mobile-first, HTTPS, sitemap XML, robots.txt, schema.org, canonical." },
    { title: "SEO local avancé", tools: "", desc: "Pages par zone, citations, Local Pack." },
    { title: "Suivi & reporting", tools: "GA4, Search Console, Looker Studio", desc: "KPIs, rapport mensuel." }
  ],
  experience: [
    {
      role: "Chargée de Référencement Naturel (SEO)",
      date: "05/2026 – 08/2026",
      location: "Monastir",
      description: "Optimisation SEO, rédaction/intégration de contenus ciblés, suivi des performances."
    },
    {
      role: "Stage de Projet Innovant (Plateforme éco-construction)",
      date: "01/2025 – 06/2025",
      location: "Mahdia",
      description: "Entretiens avec architectes et fournisseurs, analyse des besoins, conception des fonctionnalités."
    },
    {
      role: "Stage de Perfectionnement (Assistante Commerciale)",
      date: "07/2024 – 08/2024",
      location: "Groupe Plastivaloire, Sousse",
      description: "Suivi de la production, de la qualité, des clients et des commandes."
    },
    {
      role: "Stage Service Clientèle",
      date: "01/2023 – 02/2023",
      location: "BIAT, Tunis",
      description: "Accueil et orientation des clients, découverte des produits et procédures bancaires."
    }
  ],
  projects: [
     {
      title: "Clim Expert (SEO)",
      date: "2026",
      location: "France / IDF",
      description: "Optimisation SEO multi-sites pour un réseau d'installateurs de climatisation. Amélioration du positionnement local et technique.",
      links: [
        "https://clim-expert-78.com/",
        "https://clim-expert-77.com/",
        "https://clim-expert-91.com/",
        "https://clim-expert-92.com/",
        "https://airlys.fr/"
      ]
    }
    {
      title: "Dolce Misou",
      date: "11/2025 – en cours",
      location: "Sfax",
      description: "Entreprise de tiramisu artisanal. Production, logistique, commandes, relation client, achats ; clientèle régulière fidélisée."
    },
    {
      title: "Plateforme éco-construction",
      date: "2025",
      location: "Mahdia",
      description: "Projet innovant de mise en relation dans l'éco-construction."
    },
 
  ],
  education: [
    {
      degree: "Master Pro en Marketing Digital",
      school: "IHEC Sfax",
      date: "09/2025 – en cours"
    },
    {
      degree: "Licence en Commerce et Distribution (Technique de Vente)",
      school: "ISET Mahdia",
      date: "09/2022 – 06/2025"
    },
    {
      degree: "Formation START'APII",
      school: "Mahdia Entreprendre (APII)",
      date: "Janvier 2025"
    }
  ],
  certifications: [
    {
      name: "AI Search Operating System",
      issuer: "Semrush Academy",
      validUntil: "28/09/2027",
      image: "/assets/certifs/semrush.jpg"
    },
    {
      name: "Google Ads Video Certification",
      issuer: "Google",
      validUntil: "03/04/2027",
      image: "/assets/certifs/google-ads-video.jpg"
    },
    {
      name: "Digital Advertising Certified",
      issuer: "HubSpot Academy",
      validUntil: "03/05/2027",
      image: "/assets/certifs/hubspot.jpg"
    },
    {
      name: "Attestation START'APII",
      issuer: "APII",
      validUntil: "Permanente",
      image: "/assets/certifs/start-apii.jpg"
    }
  ],
  skills: {
    seo: ["Semrush", "Ahrefs", "Google Search Console", "Screaming Frog", "SurferSEO", "Ubersuggest", "AnswerThePublic"],
    analytics: ["Google Analytics (GA4)", "Google Ads", "Looker Studio"],
    creation: ["WordPress", "Canva", "Adobe Photoshop", "Adobe Illustrator"],
    office: ["Microsoft Office", "Google Drive", "LinkedIn"],
    soft: ["Créativité", "Organisation", "Sens commercial", "Gestion de projet", "Relation client", "Entrepreneuriat"]
  },
  languages: [
    { name: "Français", level: "C1" },
    { name: "Anglais", level: "B2 compréhension / B1 expression" }
  ],
  contact: {
    email: "mayssajrah12@gmail.com",
    linkedin: "https://linkedin.com/in/mayssa-jrah",
    location: "Mobilité internationale pour stage",
    driverLicense: "Permis B",
    nationality: "Tunisienne"
  }
};
`;

const contentEN = `
export const portfolioDataEN = {
  hero: {
    name: "MAYSSA JRAH",
    title: "SEO & Digital Marketing Specialist",
    catchphrase: "Data-Driven Strategies • Increased Visibility • Measurable Growth",
    availability: "Available for a 6-month internship from February 2027",
    resumeUrl: "/assets/cv-mayssa-jrah.pdf",
    contactEmail: "mayssajrah12@gmail.com"
  },
  about: {
    description: "2nd-year Master's student in Digital Marketing (IHEC Sfax) with a background in commerce and retail. My experiences in content creation, project management, customer relations, and entrepreneurship allow me to combine creativity, organization, and business acumen.",
    stats: [
      { label: "Pro experiences", value: 4 },
      { label: "Certifications", value: 3 },
      { label: "SEO Method steps", value: 14 },
      { label: "Business created", value: 1 }
    ]
  },
  seoMethod: [
    { title: "Keyword Research", tools: "Semrush, Ahrefs, Google Keyword Planner", desc: "Search intent, volume, difficulty, long-tail, clusters." },
    { title: "Service Research", tools: "", desc: "Creating one page per service (1 page = 1 service = 1 keyword)." },
    { title: "Content Ideas", tools: "AnswerThePublic, PAA, AlsoAsked, Reddit", desc: "Featured snippets, editorial calendar." },
    { title: "Competitor Analysis", tools: "Semrush, Ahrefs, Similarweb, SpyFu", desc: "Gap analysis, Core Web Vitals." },
    { title: "SEO Content Creation", tools: "SurferSEO, Grammarly", desc: "Title 50-60 char., meta description 150-160 char., semantic field, ALT." },
    { title: "Tag Structure", tools: "", desc: "H1/H2/H3, Title ≠ H1, Open Graph." },
    { title: "SEO FAQ", tools: "", desc: "FAQPage JSON-LD schema, PAA questions." },
    { title: "Internal Linking", tools: "", desc: "Descriptive anchors, orphan pages, thematic silo." },
    { title: "Backlinks", tools: "Ahrefs, Majestic, HARO, Hunter.io", desc: "Guest posting, disavow." },
    { title: "Google Business Profile", tools: "", desc: "Complete profile, posts, reviews, NAP consistency." },
    { title: "Redirects", tools: "", desc: "301 vs 302, 404 pages, redirect chains." },
    { title: "Technical SEO", tools: "", desc: "Core Web Vitals, mobile-first, HTTPS, XML sitemap, robots.txt, schema.org, canonical." },
    { title: "Advanced Local SEO", tools: "", desc: "Pages by area, citations, Local Pack." },
    { title: "Tracking & Reporting", tools: "GA4, Search Console, Looker Studio", desc: "KPIs, monthly report." }
  ],
  experience: [
    {
      role: "SEO Specialist",
      date: "05/2026 – 08/2026",
      location: "Monastir, Tunisia",
      description: "SEO optimization, writing/integration of targeted content, performance tracking."
    },
    {
      role: "Innovative Project Intern (Eco-construction Platform)",
      date: "01/2025 – 06/2025",
      location: "Mahdia, Tunisia",
      description: "Interviews with architects and suppliers, needs analysis, feature design."
    },
    {
      role: "Advanced Trainee (Sales Assistant)",
      date: "07/2024 – 08/2024",
      location: "Groupe Plastivaloire, Sousse",
      description: "Production tracking, quality control, customer relations, and order management."
    },
    {
      role: "Customer Service Intern",
      date: "01/2023 – 02/2023",
      location: "BIAT, Tunis",
      description: "Welcoming and guiding customers, discovery of banking products and procedures."
    }
  ],
  projects: [
        title: "Clim Expert (SEO)",
      date: "2026",
      location: "France / IDF",
      description: "Multi-site SEO optimization for an air conditioning installation network. Improvement of local and technical positioning.",
      links: [
        "https://clim-expert-78.com/",
        "https://clim-expert-77.com/",
        "https://clim-expert-91.com/",
        "https://clim-expert-92.com/",
        "https://airlys.fr/"
      ]
    }
    {
      title: "Dolce Misou",
      date: "11/2025 – present",
      location: "Sfax",
      description: "Artisanal tiramisu business. Production, logistics, orders, customer relations, purchasing; established regular customer base."
    },
    {
      title: "Eco-construction Platform",
      date: "2025",
      location: "Mahdia",
      description: "Innovative project for connecting professionals in the eco-construction sector."
    },
    {

  ],
  education: [
    {
      degree: "Professional Master's in Digital Marketing",
      school: "IHEC Sfax",
      date: "09/2025 – present"
    },
    {
      degree: "Bachelor's in Commerce and Retail (Sales Technique)",
      school: "ISET Mahdia",
      date: "09/2022 – 06/2025"
    },
    {
      degree: "START'APII Training",
      school: "Mahdia Entreprendre (APII)",
      date: "January 2025"
    }
  ],
  certifications: [
    {
      name: "AI Search Operating System",
      issuer: "Semrush Academy",
      validUntil: "09/28/2027",
      image: "/assets/certifs/semrush.jpg"
    },
    {
      name: "Google Ads Video Certification",
      issuer: "Google",
      validUntil: "04/03/2027",
      image: "/assets/certifs/google-ads-video.jpg"
    },
    {
      name: "Digital Advertising Certified",
      issuer: "HubSpot Academy",
      validUntil: "05/03/2027",
      image: "/assets/certifs/hubspot.jpg"
    },
    {
      name: "START'APII Certificate",
      issuer: "APII",
      validUntil: "Permanent",
      image: "/assets/certifs/start-apii.jpg"
    }
  ],
  skills: {
    seo: ["Semrush", "Ahrefs", "Google Search Console", "Screaming Frog", "SurferSEO", "Ubersuggest", "AnswerThePublic"],
    analytics: ["Google Analytics (GA4)", "Google Ads", "Looker Studio"],
    creation: ["WordPress", "Canva", "Adobe Photoshop", "Adobe Illustrator"],
    office: ["Microsoft Office", "Google Drive", "LinkedIn"],
    soft: ["Creativity", "Organization", "Business acumen", "Project management", "Customer relations", "Entrepreneurship"]
  },
  languages: [
    { name: "French", level: "C1" },
    { name: "English", level: "B2 comprehension / B1 expression" }
  ],
  contact: {
    email: "mayssajrah12@gmail.com",
    linkedin: "https://linkedin.com/in/mayssa-jrah",
    location: "International mobility for internship",
    driverLicense: "Type B License",
    nationality: "Tunisian"
  }
};
`;

const uiTranslations = `
export const uiTranslations = {
  fr: {
    nav: {
      about: "À Propos",
      seo: "Méthode SEO",
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
      skills: "Compétences",
      contact: "Contact",
      downloadCv: "Télécharger CV"
    },
    titles: {
      about: "À Propos",
      seo: "Ma Méthode SEO",
      experience: "Expérience Professionnelle",
      projects: "Projets",
      education: "Parcours Académique",
      certifications: "Certifications",
      skills: "Compétences Techniques",
      contact: "Me Contacter"
    },
    skillsCat: {
      seo: "Outils SEO",
      analytics: "Analytics & Ads",
      creation: "Création & CMS",
      office: "Bureautique",
      soft: "Savoir-être (Soft Skills)",
      languages: "Langues"
    },
    misc: {
      downloadCv: "Télécharger CV",
      contactMe: "Me Contacter",
      available: "Disponible pour",
      sendEmail: "Envoyer un email",
      linkedin: "LinkedIn",
      validUntil: "Valide jusqu'au",
      tools: "Outils :"
    }
  },
  en: {
    nav: {
      about: "About",
      seo: "SEO Method",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
      downloadCv: "Download CV"
    },
    titles: {
      about: "About Me",
      seo: "My SEO Method",
      experience: "Professional Experience",
      projects: "Projects",
      education: "Academic Background",
      certifications: "Certifications",
      skills: "Technical Skills",
      contact: "Contact Me"
    },
    skillsCat: {
      seo: "SEO Tools",
      analytics: "Analytics & Ads",
      creation: "Creation & CMS",
      office: "Office Software",
      soft: "Soft Skills",
      languages: "Languages"
    },
    misc: {
      downloadCv: "Download CV",
      contactMe: "Contact Me",
      available: "Available for",
      sendEmail: "Send an email",
      linkedin: "LinkedIn",
      validUntil: "Valid until",
      tools: "Tools:"
    }
  }
};

export const portfolioData = portfolioDataFR; // Fallback export for existing code that hasn't been updated yet
`;

fs.writeFileSync(DATA_FILE, contentFR + '\\n' + contentEN + '\\n' + uiTranslations);

// Refactoring components
const files = fs.readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(COMPONENTS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace import
  content = content.replace(/import\s+{\s*portfolioData\s*}\s+from\s+"@\/data\/content";?/g, 'import { useLanguage } from "@/context/language-context";');

  // Inject useLanguage hook
  const fnRegex = /export\s+function\s+([A-Za-z0-9_]+)\s*\(\)\s*{/g;
  content = content.replace(fnRegex, (match) => {
    return \`\${match}\\n  const { data: portfolioData, t } = useLanguage();\\n\`;
  });

  // UI translations - manual replacements for some common strings
  content = content.replace(/>À Propos</g, '>{t.titles.about}<');
  content = content.replace(/>Ma Méthode SEO</g, '>{t.titles.seo}<');
  content = content.replace(/>Expérience Professionnelle</g, '>{t.titles.experience}<');
  content = content.replace(/>Projets</g, '>{t.titles.projects}<');
  content = content.replace(/>Parcours Académique</g, '>{t.titles.education}<');
  content = content.replace(/>Certifications</g, '>{t.titles.certifications}<');
  content = content.replace(/>Compétences Techniques</g, '>{t.titles.skills}<');
  content = content.replace(/>Me Contacter</g, '>{t.titles.contact}<');

  // Skills specifics
  content = content.replace(/>Outils SEO</g, '>{t.skillsCat.seo}<');
  content = content.replace(/>Analytics & Ads</g, '>{t.skillsCat.analytics}<');
  content = content.replace(/>Création & CMS</g, '>{t.skillsCat.creation}<');
  content = content.replace(/>Bureautique</g, '>{t.skillsCat.office}<');
  content = content.replace(/>Savoir-être \(Soft Skills\)</g, '>{t.skillsCat.soft}<');
  content = content.replace(/>Langues</g, '>{t.skillsCat.languages}<');
  
  // Misc
  content = content.replace(/Télécharger CV/g, '{t.misc.downloadCv}');
  content = content.replace(/>Outils :<\/span>/g, '>{t.misc.tools}</span>');
  content = content.replace(/Valide jusqu'au/g, '{t.misc.validUntil}');

  // In navbar specifically
  if (file === 'navbar.tsx') {
    // Add Language Switcher to Navbar
    if (!content.includes('const { lang, setLang, t }')) {
      content = content.replace('const { data: portfolioData, t } = useLanguage();', 'const { lang, setLang, t } = useLanguage();');
      
      const themeToggleRegex = /<ThemeToggle \/>/g;
      content = content.replace(themeToggleRegex, \`
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="px-3 py-1.5 rounded-full bg-brand-electric/10 text-brand-electric dark:text-brand-cyan font-semibold hover:bg-brand-electric hover:text-white dark:hover:bg-brand-cyan transition-colors"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <ThemeToggle />\`);

      // Translate nav links
      content = content.replace(/>À Propos</, '>{t.nav.about}<');
      content = content.replace(/>Méthode SEO</, '>{t.nav.seo}<');
      content = content.replace(/>Expérience</, '>{t.nav.experience}<');
      content = content.replace(/>Projets</, '>{t.nav.projects}<');
      content = content.replace(/>Formation</, '>{t.nav.education}<');
      content = content.replace(/>Compétences</, '>{t.nav.skills}<');
      content = content.replace(/>Contact</, '>{t.nav.contact}<');
    }
  }

  // Handle contact.tsx specifics
  if (file === 'contact.tsx') {
    content = content.replace(/Envoyer un email/g, '{t.misc.sendEmail}');
  }

  fs.writeFileSync(filePath, content);
}
console.log('Refactoring complete!');
