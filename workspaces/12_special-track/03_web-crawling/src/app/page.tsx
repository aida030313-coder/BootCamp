import CrawlingExample from "./CrawlingExample";

export default function Page() {

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          웹 크롤링 실습 예제
        </h1>
        <p className="text-gray-600 mb-8">
          각 버튼을 클릭하여 크롤링 예제를 실행하고 결과를 확인하세요.
        </p>

        <CrawlingExample />

        {/* 도움말 */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="font-bold text-lg mb-2 text-blue-900">💡 확인</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm">
            <li>
              개발자 도구(F12)를 열고 Network 탭에서 API 요청을 확인하세요
            </li>
            <li>
              Puppeteer 예제는 실행 시간이 5~10초 정도 걸릴 수 있습니다
            </li>
            <li>
              실패한 경우 콘솔(터미널)에 로그가 출력되니 확인하세요
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}