import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              번들 최적화 실습
            </h1>
            <p className="text-xl text-gray-600">
              최적화가 적용되기 전의 성능 문제를 경험해보고 개선해보세요.
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📚 이 프로젝트의 목적
            </h2>
            <p className="text-gray-600 mb-4">
              이 프로젝트는 Next.js 번들 최적화 기법을 학습하기 위한 실습 자료입니다.
              의도적으로 최적화되지 않은 코드를 포함하고 있으며, 다음과 같은 문제점들을 확인할 수 있습니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>트리쉐이킹이 되지 않는 라이브러리 import 방식</li>
              <li>코드 스플리팅이 되지 않는 무거운 컴포넌트</li>
              <li>불필요하게 큰 번들 크기</li>
              <li>초기 로딩 성능 저하</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/editor" 
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-6 shadow-lg transition-all transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">✍️ 에디터 페이지</h3>
              <p className="text-blue-100">
                무거운 에디터 라이브러리가 포함된 페이지
              </p>
            </Link>

            <Link 
              href="/dashboard" 
              className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-6 shadow-lg transition-all transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">📊 대시보드</h3>
              <p className="text-green-100">
                차트 라이브러리가 포함된 대시보드
              </p>
            </Link>

            <Link 
              href="/utils" 
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-6 shadow-lg transition-all transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">🛠️ 유틸리티</h3>
              <p className="text-purple-100">
                잘못된 import 패턴 예시
              </p>
            </Link>

            <Link 
              href="/data" 
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-6 shadow-lg transition-all transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">📦 데이터 페이지</h3>
              <p className="text-orange-100">
                큰 데이터가 인라인으로 포함된 페이지
              </p>
            </Link>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>실습:</strong> 이 프로젝트는 학습 목적으로 의도적으로 최적화되지 않은 코드를 포함하고 있습니다.
                  최적화를 통해 성능을 개선해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

