import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'react-hot-toast';
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import QueryProvider from "@/components/Providers/queryProvider";


export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chakam Capsule",
  description: "A platform that allows people to save their photos in a capsule",
  keywords: "meme, twitter, tiktok, social-media, capsule, save",
  robots: "index, follow",
  openGraph: {
    type: "article",
    url: "https://chakam-capsule.vercel.app",
    title: "Chakam Capsule",
    description: "A platform that allows people to save their photos in a capsule",
    images: [
      {
        url: "https://chakam-capsule.vercel.app/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "A platform that allows people to save their photos in a capsule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@chakam_capsule",
    title: "Chakam Capsule",
    description: "A platform that allows people to save their photos in a capsule",
    images: ["https://chakam-capsule.vercel.app/banner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    {/* <ThemeProvider attribute="class"> */}
        <html lang="en">
        <head>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          </ThemeProvider>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <QueryProvider>
            {children}
          </QueryProvider>
          <Toaster/>
        </body>
        <Analytics/>
      </html>

    {/* </ThemeProvider> */}

    </ClerkProvider>
   
  );
}