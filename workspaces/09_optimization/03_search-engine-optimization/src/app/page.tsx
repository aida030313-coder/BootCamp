import Link from "next/link";
import { getLatestPosts } from "@/post.service";
import Image from "next/image";

export default async function Home() {

  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            개발자를 위한 기술 블로그
          </h1>
          <p className="text-xl text-gray-600">
            최신 웹 개발 트렌드와 기술을 공유합니다
          </p>
        </div>

        <section className="mb-12">
          <div className="text-3xl font-bold text-gray-900 mb-8">
            최신 포스트
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.imageUrl}
                    alt={`${post.title} 포스트 썸네일 이미지`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <span>{post.title}</span>
                  </h3>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    {post.date} · {post.readTime}
                  </div>
                  
                  <div className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    더 읽기 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            모든 포스트 보기
          </Link>
        </div>
      </main>
    </>
  );
}
