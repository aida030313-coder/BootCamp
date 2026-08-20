'use client';

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "프리미엄 카메라",
    price: "1,299,000원",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 2,
    name: "무선 헤드폰",
    price: "349,000원",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    name: "스마트 워치",
    price: "599,000원",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 4,
    name: "노트북",
    price: "2,499,000원",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 font-display">
          인기 제품
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          최신 트렌드의 프리미엄 제품을 만나보세요
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              {/* 
                ⚠️ 최적화 안됨: 
                1. img 태그 사용
                2. lazy loading 없음 (모든 이미지 즉시 로드)
                3. 고해상도 이미지를 작은 카드에 표시
                4. WebP 같은 최신 포맷 미사용
              */}
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  quality={80}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-600 font-mono">{product.price}</p>
                <button className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                  구매하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

