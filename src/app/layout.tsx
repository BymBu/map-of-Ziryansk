import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Село Зырянск Прибайкальский район Бурятия",
  description: "История, карта, спутник",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ЛОКАЛЬНЫЕ ФАЙЛЫ ИЗ public/vendor/pannellum/ для панорамы*/}
        <link rel="stylesheet" href="/vendor/pannellum/pannellum.css" />
        <script src="/vendor/pannellum/pannellum.js" defer />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}