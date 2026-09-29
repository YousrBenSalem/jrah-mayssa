import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
// I will create these components next
import { About } from "@/components/about";
import { SeoMethod } from "@/components/seo-method";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <About />
        <SeoMethod />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <footer className="w-full py-8 text-center text-sm text-gray-500 border-t border-gray-100 dark:border-white/5">
        <p>© {new Date().getFullYear()} Mayssa Jrah. Tous droits réservés.</p>
      </footer>
    </>
  );
}
