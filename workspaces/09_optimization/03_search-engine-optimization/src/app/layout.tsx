import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL('http://localhost:3000'), // 여기에 url 앞에 붙을 사이트 배포 주소 쓰기

  title: {
    default: "DevBlog - 개발자를 위한 기술 블로그",
    template: "%s | DevBlog"
  },
  description: "Next.js, React, TypeScript 등 최신 웹 개발 기술과 트렌드를 다루는 개발자 블로그입니다. 성능 최적화, SEO, 실무 경험을 공유합니다.",
  keywords: ["Next.js", "React", "TypeScript", "웹 개발", "프론트엔드"],
  authors: [{ name: "DevBlog Team", url: "https://devblog.com"}],
  creator: "DevBlog Team",
  publisher: "DevBlog Team",

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "DevBlog",
    title: "DevBlog - 개발자를 위한 기술 블로그",
    description: "Next.js, React, TypeScript 등 최신 웹 개발 기술과 트렌드를 다루는 개발자 블로그입니다.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevBlog 로고"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "DevBlog - 개발자를 위한 기술 블로그",
    description: "Next.js, React, TypeScript 등 최신 웹 개발 기술과 트렌드를 다루는 개발자 블로그입니다.",
    images: "/images/og-image.png",
    creator: "@devblog_team"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

          <Header />

          {children}
          
          <Footer />
          
        </div>
      </body>
    </html>
  );
}
