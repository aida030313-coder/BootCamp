import Link from "next/link";
import { getPosts } from "@/post.service";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "블로그",
  description: "웹 개발 관련 블로그 포스트 목록입니다.",
  openGraph: {
    title: "블로그 | DevBlog",
    description: "웹 개발 관련 블로그 포스트 목록",
    url: "/blog"
  }
}

export default async function BlogPage() {

  const blogPosts = await getPosts();

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          모든 포스트
        </h1>
        <div className="text-gray-600 mb-12">
          개발에 관한 다양한 글들을 읽어보세요
        </div>

        <nav className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["전체", "프론트엔드", "프로그래밍", "CSS", "최적화", "SEO"].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap border"
            >
              {category}
            </button>
          ))}
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.id}`} 
              key={post.id}
            >
              <article 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.imageUrl}
                    alt={`${post.title} 블로그 포스트 썸네일 이미지`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px): 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                
                  <div className="text-gray-700 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </div>
                
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      {post.author}
                    </div>
                    <div className="text-gray-400">
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}