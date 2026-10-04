import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque/wdth.css";
import "./globals.css";
import { site } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollBoard from "@/components/motion/ScrollBoard";
import Preloader from "@/components/motion/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL("https://utkarsh-chauhan-portfolio.vercel.app/"),
  title: {
    default: site.seo.title,
    template: `%s - ${site.name}`,
  },
  description: site.seo.description,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              jobTitle: site.title,
              email: site.email,
              sameAs: [site.github, site.linkedin],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Shimla",
                addressRegion: "Himachal Pradesh",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <div className="field" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <Preloader />
        <SmoothScroll />
        <ScrollBoard />
        <CustomCursor />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
