import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Footer from "@/components/Footer";
import GlobalHeader from "@/components/GlobalHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalHeader />
        <main className="flex-1 relative">
          {/* Proudly Nigerian Stamp */}
          <div className="absolute top-0 right-0 z-[60] pointer-events-none p-4 md:p-6">
            <Image
              src="/images/proudly-nigerian.png"
              alt="Proudly Nigerian"
              width={140}
              height={140}
              className="w-24 md:w-32 h-auto opacity-90 drop-shadow-md"
              priority
            />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
