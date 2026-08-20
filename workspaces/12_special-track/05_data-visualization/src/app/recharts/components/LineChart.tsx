'use client'

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

export default function LineChart() {

  // data 정의 (recharts - label, data를 하나의 객체로 정의)
  const data = [
    { month: '1월', '2024년 매출': 12, '2023년 매출': 8},
    { month: '2월', '2024년 매출': 19, '2023년 매출': 11},
    { month: '3월', '2024년 매출': 3, '2023년 매출': 7},
    { month: '4월', '2024년 매출': 5, '2023년 매출': 9},
    { month: '5월', '2024년 매출': 2, '2023년 매출': 6},
    { month: '6월', '2024년 매출': 3, '2023년 매출': 8},
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1. Line Chart - 월별 매출 추이
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLine data={data}>
            {/* 축 지정 */}
            <XAxis dataKey="month"/>
            <YAxis />

            {/* 첫 번째 라인 */}
            <Line 
              dataKey="2024년 매출"
              type="monotone"
              stroke='rgb(75, 192, 192)'
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

            {/* 두 번째 라인 */}
            <Line 
              dataKey="2023년 매출"
              type="monotone"
              stroke='rgb(255, 99, 132)'
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

            {/* 범례 지정 */}
            <Legend
              verticalAlign='top'
              align='right'
              height={50}
            />

            {/* 툴팁 지정 */}
            <Tooltip />

            {/* 격자 그리기 (1: 실선의 길이, 3: 실선 사이의 공백) */}
            <CartesianGrid strokeDasharray="1 3" />

          </RechartsLine>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

