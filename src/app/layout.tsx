import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { MessageCircle } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aimhop - EdTech Admission Platform",
  description: "Get Admission with Scholarship Support. Empowering students to achieve their dreams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-800 font-sans" suppressHydrationWarning>
        <Toaster position="top-right" />
        <TopBar />
        <Navbar />
        <main className="flex-grow pt-20 md:pt-32 relative z-0">
          {children}
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:-translate-y-2 flex items-center justify-center animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </body>
    </html>
  );
}
