import "./globals.css";
import { Header, Navigator, Footer } from "@/components/layouts/_index"
// 파일명을 layouts로 처리하면 index.tsx 파일명까지 호출할 필요X (알아서 찾아서 가져옴)
// _index로 파일명을 변경할거면 파일명까지 붙여줘야함

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />

        <Navigator />        

        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto px-4 py-10">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
