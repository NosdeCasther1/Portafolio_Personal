import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | Edson Castillo",
    default: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: [
    "Edson Castillo",
    "desarrollador Full Stack Guatemala",
    "Next.js",
    "Laravel",
    "TypeScript",
    "inteligencia artificial",
    "desarrollo web",
    "portafolio de desarrollador",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portafolio de Edson Castillo, desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/perfil-laptop.webp`,
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      jobTitle: "Desarrollador Full Stack",
      description: siteConfig.description,
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "React",
        "Laravel",
        "ChatGPT",
        "Claude",
        "Codex",
        "Agentes de IA",
        "MCP",
        "Agent Skills",
        "Inteligencia artificial",
        "Desarrollo Full Stack",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `Portafolio de ${siteConfig.name}`,
      description: siteConfig.description,
      inLanguage: "es-GT",
      author: { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "scroll-smooth",
        "font-sans",
        spaceGrotesk.variable,
        jetbrainsMono.variable
      )}
      suppressHydrationWarning
    >
      <body className={cn(spaceGrotesk.className, "antialiased")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <div className="min-h-screen pt-10">{children}</div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
