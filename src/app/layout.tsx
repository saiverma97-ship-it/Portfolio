import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "saiverma.in | Portfolio",
  description: "Portfolio of Sai Verma, an Electronics and Communication Engineering student and Full Stack Developer specialized in frontend, backend, and system design.",
  keywords: ["Sai Verma", "Portfolio", "Full Stack Developer", "ECE Student", "Engineer", "Web Development"],
  authors: [{ name: "Sai Verma" }],
  creator: "Sai Verma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={outfit.className}>
        <Preloader />
        <div className="bg-gradient">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}

