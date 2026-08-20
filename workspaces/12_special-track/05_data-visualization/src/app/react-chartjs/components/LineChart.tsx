'use client'

import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";

ChartJS.register (
  CategoryScale,    // x축
  LinearScale,      // y축
  PointElement,     // 각 데이터 포인트의 점을 그리는 역할
  LineElement,      // 각 데이터 포인트들을 선으로 연결하는 역할
  Title,            // 차트의 제목 표시
  Tooltip,          // 정보 표현 툴팁 표시
  Legend            // 데이터 셋의 이름(범례) 표시
)

export default function LineChart() {

  const data = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'], // x축 레이블
        datasets: [{
          label: '2024년 매출', // 데이터셋 이름
          data: [12, 19, 3, 5, 2, 3], // 실제 데이터
          borderColor: 'rgb(75, 192, 192)', // 선 색상
          backgroundColor: 'rgba(75, 192, 192, 0.1)', // 영역 배경색
          tension: 0.1, // 선의 곡률 (0: 직선, 1: 부드러운 곡선)
        }, {
          label: '2023년 매출',
          data: [8, 11, 7, 9, 6, 8],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.1,
          // fill: true,   // 내부 색상 채움
          // pointRadius: 10   // 데이터 수치 표시 동그라미
        }]}

        const options = {
        responsive: true, // 반응형
        plugins: {
          legend: {
            display: true, // 범례 표시
            position: 'top' as const // 범례 위치
          },
          title: {
            display: true,
            text: '월별 매출 비교'
          }
        },
        scales: {
          y: {
            beginAtZero: true // y축을 0부터 시작
          }
        },
        maintainAspectRatio: false
      }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1. Line Chart - 월별 매출 추이
      </h2>
      <div className="h-[400px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

