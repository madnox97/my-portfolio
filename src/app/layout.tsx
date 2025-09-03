import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Koraganji Mukesh – Video Editor & Motion Graphics Designer",
    template: "%s | Koraganji Mukesh",
  },
  description:
          "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Koraganji Mukesh specializes in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
          "Koraganji Mukesh",
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Bangladesh Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
      authors: [{ name: "Koraganji Mukesh", url: "https://www.itsmukesh.me" }],
    creator: "Koraganji Mukesh",
    publisher: "Koraganji Mukesh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
          url: "https://www.itsmukesh.me",
      title: "Koraganji Mukesh – Video Editor & Motion Graphics Designer",
    description:
      "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and After Effects.",
          siteName: "Koraganji Mukesh Portfolio",
    images: [
      {
        url: "/koraganjimukesh.png",
        width: 1200,
        height: 630,
                  alt: "Koraganji Mukesh - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
          title: "Koraganji Mukesh – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
          creator: "@koraganji_mukesh", // update if you have a real Twitter handle
          images: ["/koraganjimukesh.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
          canonical: "https://www.itsmukesh.me",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
                                   name: "Koraganji Mukesh",
               url: "https://www.itsmukesh.me",
                              image: "/koraganjimukesh.png",
                              sameAs: [
                  "https://www.itsmukesh.me",
                      "https://linkedin.com/in/koraganjimukesh", // update if available
      "https://youtube.com/@itskoraganjimukesh", // update if available
      "https://twitter.com/koraganji_mukesh", // update if available
              ],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Green University of Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <MouseMoveEffect />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <JumpToTop />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
