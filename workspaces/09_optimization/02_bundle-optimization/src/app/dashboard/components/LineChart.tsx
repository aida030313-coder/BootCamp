import dayjs from "dayjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Chart.js가 그려지기 위해 필요한 컴포넌트들을 등록
ChartJS.register(
  Title,          // 제목 (차트 제목)
  Tooltip,        // 툴팁 (차트 툴팁)
  Legend,         // 범례 (차트 범례)
  CategoryScale,  // 카테고리 축
  LinearScale,    // 선형 축
  LineElement,    // 선 요소 (Line 차트)
  PointElement,   // 점 요소 (Line 차트)
);

export default function LineChart({ salesData }: { 
  salesData: { 
    month: string, 
    sales: number, 
    profit: number, 
    expenses: number 
  }[] 
}) {

    // Line 차트 데이터
    const lineChartData = {
        labels: salesData.map((d) => d.month),
        datasets: [
          {
            label: "매출",
            data: salesData.map((d) => d.sales),
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
          },
          {
            label: "순이익",
            data: salesData.map((d) => d.profit),
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            tension: 0.4,
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
            text: `${dayjs().format("YYYY년")} 매출 및 순이익 현황`,
          },
        },
      };

    return (
         <Line data={lineChartData} options={chartOptions} />
    );
}