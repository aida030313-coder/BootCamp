'use client'

import {
    Cell,
    Legend,
    Pie,
    PieChart as RechartsPie,
    ResponsiveContainer,
    Tooltip
} from "recharts";
import { processStockPipeline } from "@/utils/stockProcessor";
import { RAW_STOCKS } from "@/data/rawStocks";

const COLORS = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)'
];

export default function Recharts() {

    const processedResults = processStockPipeline(RAW_STOCKS);

    const data = processedResults.map((stock) => ({
        name: stock.name,
        value: stock.volume,
    }));

    return (
        <div className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="45%"
                        outerRadius="70%"
                        label={({ percent }) => `${((percent ?? 0) * 100).toFixed(1)}%`}
                        labelLine={false}
                    >
                        {data.map((_, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                    <Tooltip formatter={(value) => `${Number(value).toLocaleString()}주`} />
                </RechartsPie>
            </ResponsiveContainer>
        </div>
    );
}