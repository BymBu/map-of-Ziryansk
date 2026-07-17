import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Зырянск: Карта Памяти | Интерактивный проект Вячеслава Ерофеева",
  description:
    "История села Зырянск в Прибайкалье: интерактивная карта с панорамами, архивными фото ГЭС, ферм и исчезнувших деревень. Проект 2026 года.",
  keywords: [
    "Зырянск",
    "Бурятия",
    "история села",
    "интерактивная карта",
    "ГЭС Зырянская",
    "Вячеслав Ерофеев",
  ],
  openGraph: {
    title: "Зырянск: Карта Памяти",
    description: "Исчезающая история села глазами местного жителя.",
    images: ["/main.png"], // Ссылка на превью для соцсетей
  },
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
