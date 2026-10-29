import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orange Island Lagos - Secure Lakeside Living",
  description: "A master planned community and forward-thinking neighbourhood on the Lagos Lagoon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ background: "#FBF8F3", color: "#1B2228" }}>
        <SiteHeader />
        <main className="flex-1 relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
