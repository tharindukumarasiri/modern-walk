import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Modern Walk is a fashion retail web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="mt-24 flex justify-center md:mt-32 ">
          <div className="w-full max-w-[1536px] p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
