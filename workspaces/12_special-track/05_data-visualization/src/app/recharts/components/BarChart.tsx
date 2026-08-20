'use client'

import {
  Bar,
  CartesianGrid,
  Cell,
  BarChart as ReChartsBar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

export default function BarChart() {

  const data = [
    { product: '노트북', '판매량 (개)': 65 },
    { product: '스마트폰', '판매량 (개)': 59 },
    { product: '태블릿', '판매량 (개)': 80 },
    { product: '이어폰', '판매량 (개)': 81 },
    { product: '모니터', '판매량 (개)': 56 },
  ]

  const colors = [
    'rgba(255, 99, 132, 0.7)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(255, 206, 86, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(153, 102, 255, 0.7)'
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2. Bar Chart - 제품별 판매량
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ReChartsBar data={data}>
            <XAxis dataKey="product" />
            <YAxis />
            <CartesianGrid  strokeDasharray="5 3" />
            <Tooltip />

            <Bar
              dataKey="판매량 (개)"
              radius={[ 8, 8, 0, 0 ]}
              label={{ position: 'top', fontSize: 12, fontWeight: 'bold' }}
              // fill='rgba(255, 99, 132, 0.7)'
            >
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index]}/>
              ))}
            </Bar>

          </ReChartsBar>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

