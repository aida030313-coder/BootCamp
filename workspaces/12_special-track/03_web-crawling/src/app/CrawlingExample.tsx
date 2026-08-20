'use client';

import { useState } from 'react';

type ApiResponse = {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
  [key: string]: any;
};


export default function CrawlingExample() {

  const [loading, setLoading] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, ApiResponse>>({});

  // API 호출 함수
  const callAPI = async (endpoint: string, label: string) => {
    setLoading(label);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setResults((prev) => ({ ...prev, [label]: data }));
    } catch (error) {
      setResults((prev) => ({
        ...prev,
        [label]: {
          success: false,
          error: error instanceof Error ? error.message : '요청 실패',
        },
      }));
    } finally {
      setLoading(null);
    }
  };

  const examples = [
    {
      category: '기본',
      items: [
        {
          label: 'API Route 기본',
          endpoint: '/api/hello',
          description: 'Next.js API Route의 기본 동작을 확인합니다.',
        },
      ],
    },
    {
      category: '정적 크롤링 (Cheerio)',
      items: [
        {
          label: '1) 단일 데이터',
          endpoint: '/api/cheerio/basic',
          description: '기본적인 텍스트와 속성 추출',
        },
        {
          label: '2) 리스트 데이터',
          endpoint: '/api/cheerio/list',
          description: '.each()를 사용한 반복 데이터 추출',
        },
        {
          label: '3) 실전 크롤링',
          endpoint: '/api/cheerio/advanced',
          description: '실제 웹사이트(위키피디아) 크롤링',
        },
        {
          label: '4) 크롤링 실습',
          endpoint: '/api/cheerio/practice',
          description: '뉴스 (IT/과학) 크롤링',
        },
      ],
    },
    {
      category: '동적 크롤링 (Puppeteer)',
      items: [
        {
          label: '1) 기본 사용',
          endpoint: '/api/puppeteer/basic',
          description: 'Puppeteer 기본 페이지 로드 및 데이터 추출',
        },
        {
          label: '2) 인터랙션',
          endpoint: '/api/puppeteer/interaction',
          description: '클릭, 타이핑, 검색 등 사용자 동작 시뮬레이션',
        },
      ],
    },
  ];



  return (
    <>
      {examples.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
            {category.category}
          </h2>
          <div className="grid gap-4">
            {category.items.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow w-full max-w-full overflow-auto break-words"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                      {item.endpoint}
                    </code>
                  </div>
                  <button
                    onClick={() => callAPI(item.endpoint, item.label)}
                    disabled={loading === item.label}
                    className={`ml-4 px-6 py-2 rounded-lg font-semibold transition-colors ${
                      loading === item.label
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {loading === item.label ? '실행 중...' : '실행'}
                  </button>
                </div>

                {/* 결과 표시 */}
                {results[item.label] && (
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center mb-2">
                      <span
                        className={`inline-block px-2 py-1 rounded text-sm font-semibold ${
                          results[item.label].success
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {results[item.label].success ? '✓ 성공' : '✗ 실패'}
                      </span>
                      {results[item.label].message && (
                        <span className="ml-2 text-sm text-gray-600">
                          {results[item.label].message}
                        </span>
                      )}
                    </div>
                    
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs max-h-96 overflow-y-auto">
                      {JSON.stringify(results[item.label], null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}