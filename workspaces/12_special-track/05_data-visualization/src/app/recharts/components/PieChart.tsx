'use client'

import { ResponsiveContainer,
  PieChart as RechartsPie,
  Pie,
  Tooltip,
  Cell
 } from "recharts";

export default function PieChart() {

  const data = [
    { company: "회사 A", value: 30 },
    { company: "회사 B", value: 25 },
    { company: "회사 C", value: 20 },
    { company: "회사 D", value: 15 },
    { company: "기타", value: 10 },
  ]

  const colors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)'
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3. Pie Chart - 시장 점유율
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPie>
            <Pie 
              data={data}
              cx="50%"
              cy="50%"
              label={({ value, index }) => `${data[index].company} : ${value}`}
              labelLine={false}
              innerRadius={70}   // 도넛 차트 만들기
            >

            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}

            </Pie>
            {/* <Tooltip /> */}
          </RechartsPie>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

