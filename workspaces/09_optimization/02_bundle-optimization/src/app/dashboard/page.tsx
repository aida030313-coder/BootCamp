
import Link from "next/link";

import range from "lodash/range";

import Charts from "./components/Charts";

async function getSalesData(): Promise<{month: string, sales: number, profit: number, expenses: number}[]> {
  return range(1, 13).map((month) => ({
    month: `${month}월`,
    sales: Math.floor(Math.random() * 1000000) + 500000,
    profit: Math.floor(Math.random() * 500000) + 200000,
    expenses: Math.floor(Math.random() * 300000) + 100000,
  }));
}

export default async function DashboardPage() {

  // 월별 상세 데이터 (데이터 페칭하듯이 수정함)
  const salesData = await getSalesData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
          <Link 
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            홈으로
          </Link>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">이 페이지의 문제점</h3>
              <div className="mt-2 text-sm text-green-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>Chart.js와 react-chartjs-2(Chart.js 래핑 라이브러리)를 직접 import → 각 차트 컴포넌트에서 필요한 것만 import</li>
                  <li>lodash 전체를 import → 필요한 함수만 import</li>
                  <li>모든 차트 컴포넌트를 한번에 import → 코드 스플리팅으로 동적 import</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Charts salesData={salesData} />

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">월별 상세 데이터</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    월
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    매출
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    순이익
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    지출
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salesData.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.month}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {Math.round(data.sales).toLocaleString()}원
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {Math.round(data.profit).toLocaleString()}원
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {Math.round(data.expenses).toLocaleString()}원
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

