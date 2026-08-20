"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("./LineChart"), {
  loading: () => <ChartLoadingUI />,
  ssr: false
})

const BarChart = dynamic(() => import("./BarChart"), {
  loading: () => <ChartLoadingUI />,
  ssr: false
})

const PieChart = dynamic(() => import("./PieChart"), {
  loading: () => <ChartLoadingUI />,
  ssr: false
})

function ChartLoadingUI() {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">로딩중...</p>
      </div>
    </div>
  )
}

export default function Charts({ salesData }: { 
  salesData: { 
    month: string, 
    sales: number, 
    profit: number, 
    expenses: number 
  }[] 
}) {

  const [selectedChart, setSelectedChart] = useState<"line" | "bar" | "pie">("line");

  return (
    <>
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setSelectedChart("line")}
          className={`px-4 py-2 rounded ${
            selectedChart === "line"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          라인 차트
        </button>
        <button
          onClick={() => setSelectedChart("bar")}
          className={`px-4 py-2 rounded ${
            selectedChart === "bar"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          바 차트
        </button>
        <button
          onClick={() => setSelectedChart("pie")}
          className={`px-4 py-2 rounded ${
            selectedChart === "pie"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          파이 차트
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-96">
          {selectedChart === "line" && (
           <LineChart salesData={salesData}/>
          )}
          {selectedChart === "bar" && (
            <BarChart salesData={salesData} />
          )}
          {selectedChart === "pie" && (
            <PieChart salesData={salesData} />
          )}
        </div>
      </div>
    </>
  );
}