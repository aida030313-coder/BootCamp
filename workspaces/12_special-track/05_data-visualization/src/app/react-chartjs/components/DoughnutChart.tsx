'use client'

import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip, TooltipItem } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Title,
    Legend,
    Tooltip
)

export default function DoughnutChart() {

  const data = {
        labels: ['마케팅', '개발', '인사', '운영', '기타'],
        datasets: [{
          label: '예산 (백만원)',
          data: [300, 500, 150, 200, 100],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ],
          borderWidth: 2,
          borderColor: '#fff',
          hoverOffset: 15 // 호버 시 확대 효과
        }]
      }

  const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' as const
          },
          title: {
            display: true,
            text: '부서별 예산 분배'
          },
          tooltip: {
            callbacks: {
              label: function(context: TooltipItem<'doughnut'>) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return context.label + ': ' + context.parsed + '백만원 (' + percentage + '%)';
              }
            }
          }
        },
        cutout: '50%' // 도넛 구멍의 크기 (0%: 파이차트, 100%: 링만 남음)
      }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4. Doughnut Chart - 예산 분배
      </h2>
      <div className="h-[400px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

