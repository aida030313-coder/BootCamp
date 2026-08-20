import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import ProductShowcase from "./components/ProductShowcase";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero 섹션 - 큰 배경 이미지 */}
      <HeroSection />
      
      {/* 제품 쇼케이스 - 여러 이미지 */}
      <ProductShowcase />
      
      {/* 이미지 갤러리 - 많은 이미지 */}
      <ImageGallery />
      
      {/* 블로그 섹션 - 썸네일 이미지 */}
      <BlogSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

