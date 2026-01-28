import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzelDisplay = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DsRenders | Modern Architecture Studio",
  description: "Award-winning architecture, interior design, furniture, and landscape studio. Creating spaces that inspire, connect, and enhance human experience through innovative design.",
  keywords: ["architecture", "interior design", "furniture design", "landscape architecture", "modern design", "sustainable architecture"],
  authors: [{ name: "DsRenders" }],
  openGraph: {
    title: "DsRenders | Modern Architecture Studio",
    description: "Award-winning architecture and design studio creating spaces that inspire.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DsRenders | Modern Architecture Studio",
    description: "Award-winning architecture and design studio creating spaces that inspire.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzelDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
