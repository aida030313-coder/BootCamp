import dayjs from "dayjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  Title,          // 제목 (차트 제목)
  Tooltip,        // 툴팁 (차트 툴팁)
  Legend,         // 범례 (차트 범례)
  CategoryScale,  // 카테고리 축
  LinearScale,    // 선형 축
  BarElement,     // 바 요소 (Bar 차트)
);

export default function BarChart({ salesData }: { 
  salesData: { 
    month: string, 
    sales: number, 
    profit: number, 
    expenses: number 
  }[] 
}) {

      const barChartData = {
        labels: salesData.map((d) => d.month),
        datasets: [
          {
            label: "지출",
            data: salesData.map((d) => d.expenses),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };

        const chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: `${dayjs().format("YYYY년")} 실적 현황`,
            },
          },
        };
    
    return (
        <Bar data={barChartData} options={chartOptions} />
    );
}