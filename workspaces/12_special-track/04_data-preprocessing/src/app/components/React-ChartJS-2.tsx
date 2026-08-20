'use client'

import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, TooltipItem } from "chart.js";
import { processStockPipeline } from "@/utils/stockProcessor";
import { RAW_STOCKS } from "@/data/rawStocks";

ChartJS.register(
  CategoryScale,    // x축 (종목명)
  LinearScale,      // y축 (현재가)
  BarElement,       // 막대 그리는 역할
  Title,            // 차트의 제목 표시
  Tooltip,          // 정보 표현 툴팁 표시
  Legend            // 데이터 셋의 이름(범례) 표시
)

const RISING_COLOR = 'rgba(255, 99, 132, 0.8)'; 
const FALLING_COLOR = 'rgba(54, 162, 235, 0.8)';

export default function ReactChartJS2() {

    const processedResults = processStockPipeline(RAW_STOCKS);

    const data = {
        labels: processedResults.map((stock) => stock.name),
        datasets: [{
            label: '현재가 (원)',
            data: processedResults.map((stock) => stock.price),
            backgroundColor: processedResults.map((stock) => stock.isRising ? RISING_COLOR : FALLING_COLOR),
            borderRadius: 6,
        }]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false // 단일 데이터셋이라 범례 숨기기
            },
            title: {
                display: true,
                text: '종목별 현재가 및 상승여부'
            },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<'bar'>) => {
                        const stock = processedResults[context.dataIndex];
                        return `${stock.price.toLocaleString()}원 (거래량 ${stock.volume.toLocaleString()}주)`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value: number | string) => `${Number(value).toLocaleString()}원`
                }
            }
        },
        maintainAspectRatio: false
    }

    return (
        <div className="h-[360px]">
            <Bar data={data} options={options} />
        </div>
    );
}