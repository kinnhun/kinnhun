import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "Trần Trung Kiên (kinnhun) — Web & AI Studio | Creative Fullstack Developer",
  description: "Trần Trung Kiên (kinnhun) — Fullstack Web & AI Developer chuyên thiết kế Website chuẩn SEO, Web App Next.js 15, Tích hợp Gemini AI & Automation Tools. 150+ dự án hoàn thành, bảo hành 6 tháng.",
  keywords: [
    "Trần Trung Kiên",
    "kinnhun",
    "Web Developer",
    "AI Developer",
    "Thiết kế Website chuẩn SEO",
    "Next.js App Router",
    "Tailwind CSS v4",
    "Tích hợp AI Chatbot",
    "Automation Tools",
    "Mercy Tech Global"
  ],
  authors: [{ name: "Trần Trung Kiên" }],
  openGraph: {
    title: "Trần Trung Kiên (kinnhun) — Web & AI Studio Portfolio",
    description: "Chuyên thiết kế Website chuẩn SEO, Web App Next.js 15, Tích hợp Gemini AI & Automation Tools.",
    url: "https://github.com/kinnhun/kinnhun",
    siteName: "kinnhun Web & AI Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`scroll-smooth dark ${beVietnamPro.variable}`}>
      <body className="bg-[#050608] text-slate-200 bg-radial-grid min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
