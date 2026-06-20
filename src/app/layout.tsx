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
  metadataBase: new URL("https://dsrenders.com"),
  title: {
    default: "DS Renders | Architecture, Interiors & Furniture Design",
    template: "%s | DS Renders",
  },
  description:
    "DS Renders creates architecture, interiors, and bespoke furniture with high-end 3D visualization and detail-first design execution.",
  keywords: [
    "architecture",
    "interior design",
    "furniture",
    "3d visualization",
    "architectural rendering",
    "luxury interiors",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "DS Renders | Architecture, Interiors & Furniture Design",
    description:
      "Architecture, interiors, and furniture design powered by precision visualization and timeless execution.",
    url: "https://dsrenders.com",
    siteName: "DS Renders",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.dsrenders.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "DS Renders architecture and design showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Renders | Architecture, Interiors & Furniture Design",
    description:
      "Architecture, interiors, and furniture design powered by precision visualization.",
    images: ["https://images.dsrenders.com/logo.svg"],
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
          forcedTheme="dark"
          enableSystem={false}
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
