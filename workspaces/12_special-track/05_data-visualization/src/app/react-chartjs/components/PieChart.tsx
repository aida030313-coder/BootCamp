'use client'

import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";

import { TooltipItem } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Title,
  Legend,
  Tooltip
)

export default function PieChart() {

  const data = {
        labels: ['회사 A', '회사 B', '회사 C', '회사 D', '기타'],
        datasets: [{
          label: '시장 점유율 (%)',
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      }

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right' as const // 범례를 오른쪽에 배치
          },
          title: {
            display: true,
            text: '스마트폰 시장 점유율'
          },
          tooltip: {
            callbacks: {
              label: function(context: TooltipItem<'pie'>) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        },
        maintainAspectRatio: false
      }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3. Pie Chart - 시장 점유율
      </h2>
      <div className="h-[400px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

