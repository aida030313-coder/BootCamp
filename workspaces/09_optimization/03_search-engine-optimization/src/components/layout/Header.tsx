import Link from "next/link";

export default function Header() {

  return (
    
    <header className="border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            DevBlog
          </Link>
        </div>
        
        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            홈
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            블로그
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}