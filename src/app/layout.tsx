import type { Metadata } from "next";
import { Playfair_Display, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`${playfairDisplay.variable} ${sora.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
