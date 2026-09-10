import type { Metadata } from "next";
import { EB_Garamond, Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GlobalHeader from "@/components/GlobalHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orange Island Lagos - Secure Lakeside Living",
  description: "A community offering secure lakeside living, world-class planning and effortless access to vibrant amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSans.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalHeader />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
