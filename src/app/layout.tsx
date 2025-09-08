import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacred Studio by Aviva - Original Jewish Contemporary Art",
  description: "Contemporary Jewish art where ancient wisdom meets modern expression. Original mixed-media works by Aviva - each piece a prayer, every brushstroke a blessing. Available for serious collectors and sacred commissions.",
  keywords: "Jewish art, contemporary art, original paintings, religious art, spiritual art, Israeli art, Torah art, kosher art, Jewish artist, sacred art, mixed media, commission art",
  authors: [{ name: "Aviva" }],
  creator: "Aviva",
  openGraph: {
    title: "Sacred Studio by Aviva - Original Jewish Art",
    description: "Contemporary Jewish art where ancient wisdom meets modern expression. Each original work tells a story of faith, hope, and eternal connection.",
    url: "https://sacred-studio-aviva.com",
    siteName: "Sacred Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sacred Studio - Contemporary Jewish Art by Aviva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Studio by Aviva - Original Jewish Art",
    description: "Contemporary Jewish art where ancient wisdom meets modern expression.",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
