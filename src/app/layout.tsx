import type { Metadata } from "next";
import { Bruno_Ace_SC, Playfair_Display, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { IntroProvider } from "@/context/intro-context";
import Footer from "@/components/layout/footer";
import Reserved from "@/components/layout/reserved";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const brunoAceSC = Bruno_Ace_SC({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DsRenders | Architecture & Design Studio",
  description:
    "Award-winning architecture studio crafting timeless spaces through innovative design and interior excellence.",
  keywords: [
    "architecture",
    "interior design",
    "furniture",
    "sustainable architecture",
  ],
  openGraph: {
    title: "DsRenders | Architecture & Design Studio",
    description:
      "Award-winning architecture studio crafting timeless spaces through innovative design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${sora.variable} ${brunoAceSC.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <IntroProvider>
            <SmoothScroll>
              <Header />
              <main className="relative">{children}</main>
              <Footer />
              <Reserved />
            </SmoothScroll>
          </IntroProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
