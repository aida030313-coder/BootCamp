'use client'

import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function BarChart() {

  const data = {
        labels: ['노트북', '스마트폰', '태블릿', '이어폰', '모니터'],
        datasets: [{
          label: '판매량 (개)',
          data: [65, 59, 80, 81, 56],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false // 범례 숨기기
          },
          title: {
            display: true,
            text: '제품별 판매량 현황'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10 // y축 눈금 간격
            }
          }
        },
        maintainAspectRatio: false
      }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2. Bar Chart - 제품별 판매량
      </h2>
      <div className="h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

