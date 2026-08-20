import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 pt-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            📊 데이터 시각화 학습
          </h1>
          <p className="text-xl text-gray-600">
            Chart.js의 Core 개념부터 React 연동까지 데이터 시각화 방법을 배워봅시다.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Chart.js Core (Vanilla JS) */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Chart.js Core
            </h2>
            <p className="text-gray-600 mb-6">
              Chart.js의 원리와 Core API 사용법을 HTML, JavaScript 환경에서 확인해봅시다.
            </p>
            <Link
              href="/chartjs.html"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              예제 보기 →
            </Link>
            <div className="mt-4">
              <span className="inline-block bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
                Chart.js Core (HTML/JS)
              </span>
            </div>
          </div>

          {/* React-ChartJS-2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col">
            <div className="text-4xl mb-4">⚛️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              React-ChartJS-2
            </h2>
            <p className="text-gray-600 mb-6">
              React 환경에서 Chart.js를 컴포넌트로 사용하는 방법을 학습합니다.
            </p>
            <Link
              href="/react-chartjs"
              className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
            >
              예제 보기 →
            </Link>
            <div className="mt-4">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                React + Canvas
              </span>
            </div>
          </div>

          {/* Recharts */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recharts
            </h2>
            <p className="text-gray-600 mb-6">
              React 전용 차트 라이브러리로 컴포넌트 조립 방식을 학습합니다.
            </p>
            <Link
              href="/recharts"
              className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              예제 보기 →
            </Link>
            <div className="mt-4">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                React + SVG
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
