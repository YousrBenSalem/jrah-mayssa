import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Mayssa Jrah | SEO & Marketing Digital",
  description: "Portfolio de Mayssa Jrah, Chargée de Référencement SEO & Marketing Digital. Spécialiste en visibilité, croissance et performance.",
  keywords: ["SEO", "Marketing Digital", "Mayssa Jrah", "Portfolio", "Référencement Naturel", "Stage PFE"],
  authors: [{ name: "Mayssa Jrah" }],
  creator: "Mayssa Jrah",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mayssa-jrah.vercel.app",
    title: "Mayssa Jrah | SEO & Marketing Digital",
    description: "Portfolio de Mayssa Jrah, Chargée de Référencement SEO & Marketing Digital. Spécialiste en visibilité, croissance et performance.",
    siteName: "Portfolio Mayssa Jrah"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayssa Jrah | SEO & Marketing Digital",
    description: "Portfolio de Mayssa Jrah, Chargée de Référencement SEO & Marketing Digital."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
