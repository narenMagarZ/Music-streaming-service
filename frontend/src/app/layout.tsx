import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./[component]/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music streaming app",
  description: "Welcome to our Music Streaming Service repository! 🎶 Here, we've developed a robust backend solution tailored specifically for music streaming platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} items-center p-4 flex flex-col justify-start`}>
        <Navbar/>
        <main className="mt-10">
          {children}
        </main>
        </body>
    </html>
  );
}
