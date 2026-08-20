import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개",
  description: "DevBlog는 개발자들이 지식을 공유하고 성장할 수 있는 공간입니다."
}

// ❌ SEO 문제: 메타데이터 없음
export default function AboutPage() {

  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-center mb-12">
          <div className="text-5xl font-bold text-gray-900 mb-4">
            DevBlog 소개
          </div>
          <p className="text-xl text-gray-600">
            개발자들을 위한 기술 블로그 플랫폼
          </p>
        </h1>

        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              우리의 미션
            </h2>
            <div className="text-gray-700 leading-relaxed">
              DevBlog는 개발자들이 지식을 공유하고 성장할 수 있는 공간을 제공합니다.
              최신 기술 트렌드부터 실무 경험까지, 다양한 주제의 고품질 콘텐츠를 통해
              개발 커뮤니티의 발전에 기여하고자 합니다.
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              다루는 주제
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    프론트엔드 개발
                  </div>
                  <div className="text-gray-600 text-sm">
                    React, Next.js, Vue 등 최신 프론트엔드 기술
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    웹 성능 최적화
                  </div>
                  <div className="text-gray-600 text-sm">
                    번들 최적화, 이미지 최적화, Core Web Vitals
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    TypeScript
                  </div>
                  <div className="text-gray-600 text-sm">
                    타입 시스템, 고급 패턴, 실전 활용법
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    SEO 최적화
                  </div>
                  <div className="text-gray-600 text-sm">
                    검색 엔진 최적화, 메타 태그, 구조화된 데이터
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              참여하기
            </h2>
            <div className="text-gray-700 leading-relaxed mb-6">
              DevBlog는 모든 개발자에게 열려 있습니다. 
              여러분의 경험과 지식을 공유하고 싶으시다면 언제든 환영합니다!
            </div>
            {/* ❌ SEO 문제: 외부 링크에 적절한 rel 속성 없음 */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                GitHub에서 보기
              </a>
              <Link
                href="/blog"
                className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                블로그 둘러보기
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

