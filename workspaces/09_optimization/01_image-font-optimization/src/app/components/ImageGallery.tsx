'use client';

import Image from "next/image";

// ⚠️ 최적화 안됨: 많은 수의 고해상도 이미지
const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba", title: "자연 풍경 1" },
  { id: 2, url: "https://images.unsplash.com/photo-1682687221038-404cb8830901", title: "자연 풍경 2" },
  { id: 3, url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538", title: "자연 풍경 3" },
  { id: 4, url: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae", title: "자연 풍경 4" },
  { id: 5, url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b", title: "자연 풍경 5" },
  { id: 6, url: "https://images.unsplash.com/photo-1682687220067-dced9a881b56", title: "자연 풍경 6" },
  { id: 7, url: "https://images.unsplash.com/photo-1682687982501-1e58ab814714", title: "자연 풍경 7" },
  { id: 8, url: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb", title: "자연 풍경 8" },
  { id: 9, url: "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89", title: "자연 풍경 9" },
  { id: 10, url: "https://images.unsplash.com/photo-1682687982107-14492010e05e", title: "자연 풍경 10" },
  { id: 11, url: "https://images.unsplash.com/photo-1682687982298-c7514a167088", title: "자연 풍경 11" },
  { id: 12, url: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931", title: "자연 풍경 12" },
  { id: 13, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", title: "자연 풍경 13" },
  { id: 14, url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", title: "자연 풍경 14" },
  { id: 15, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", title: "자연 풍경 15" },
  { id: 16, url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff", title: "자연 풍경 16" },
  { id: 17, url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", title: "자연 풍경 17" },
  { id: 18, url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1", title: "자연 풍경 18" },
  { id: 19, url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", title: "자연 풍경 19" },
  { id: 20, url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", title: "자연 풍경 20" },
  { id: 21, url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", title: "자연 풍경 21" },
  { id: 22, url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716", title: "자연 풍경 22" },
  { id: 23, url: "https://images.unsplash.com/photo-1501854140801-50d01698950b", title: "자연 풍경 23" },
  { id: 24, url: "https://images.unsplash.com/photo-1445404590072-16ef9c18bd83", title: "자연 풍경 24" },
];

export default function ImageGallery() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 font-display">
          포토 갤러리
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          아름다운 순간들을 담은 갤러리
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow relative"
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px): 50vw, (max-width: 1280px): 33vw, 25vw"
                quality={75}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition">
            더 보기
          </button>
        </div>
      </div>
    </section>
  );
}

