import LineChart from '@/app/recharts/components/LineChart';
import BarChart from '@/app/recharts/components/BarChart';
import PieChart from '@/app/recharts/components/PieChart';

export default function RechartsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Recharts 실습
        </h1>

        <div className="space-y-8">
          <LineChart />
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}

