export default function StatCards({ stats }: {
    stats: {
        totalItems: number;
        totalValue: number;
        avgPrice: number;
        maxPrice: number | undefined;
        minPrice: number | undefined;
        categories: Record<string, number>;
    }
}) {
    return (
        <>
            {/* 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">전체 상품</div>
                <div className="text-2xl font-bold text-gray-900">{stats.totalItems}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">평균 가격</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(stats.avgPrice).toLocaleString()}원
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">최고가</div>
                <div className="text-2xl font-bold text-gray-900">
                  {stats.maxPrice?.toLocaleString()}원
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">최저가</div>
                <div className="text-2xl font-bold text-gray-900">
                  {stats.minPrice?.toLocaleString()}원
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 md:col-span-2">
                <div className="text-sm text-gray-500">총 재고 가치</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(stats.totalValue).toLocaleString()}원
                </div>
              </div>
            </div>
        </>
    );
}