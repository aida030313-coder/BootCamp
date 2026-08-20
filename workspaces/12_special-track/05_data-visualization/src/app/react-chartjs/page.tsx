import LineChart from '@/app/react-chartjs/components/LineChart';
import BarChart from './components/BarChart';
import PieChart from '@/app/react-chartjs/components/PieChart';
import DoughnutChart from '@/app/react-chartjs/components/DoughnutChart';

export default function ReactChartJSPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          React-ChartJS-2 실습
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <LineChart />
          <BarChart />
          <PieChart />
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

