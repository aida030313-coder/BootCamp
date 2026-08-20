import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "번들 최적화",
  description: "최적화를 통해 성능을 개선하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

