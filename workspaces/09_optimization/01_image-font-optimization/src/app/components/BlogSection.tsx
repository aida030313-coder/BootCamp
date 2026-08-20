'use client';

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "웹 성능 최적화의 중요성",
    excerpt: "웹 성능이 사용자 경험과 비즈니스에 미치는 영향에 대해 알아봅니다.",
    author: "김개발",
    date: "2024년 3월 15일",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    readTime: "5분",
  },
  {
    id: 2,
    title: "Next.js 이미지 최적화 가이드",
    excerpt: "Next.js의 Image 컴포넌트를 활용한 효과적인 이미지 최적화 방법을 소개합니다.",
    author: "이프론트",
    date: "2024년 3월 12일",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    readTime: "8분",
  },
  {
    id: 3,
    title: "폰트 로딩 전략과 성능",
    excerpt: "웹 폰트 로딩이 성능에 미치는 영향과 최적화 전략을 다룹니다.",
    author: "박타입",
    date: "2024년 3월 10일",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    readTime: "6분",
  },
];


export default function BlogSection() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 font-display">
          최신 블로그
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          개발 인사이트와 최신 트렌드
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="font-mono">{post.date}</span>
                  <span>•</span>
                  <span className="font-mono">{post.readTime} 읽기</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 font-display">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {post.author}
                  </span>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition">
                    더 읽기 →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

