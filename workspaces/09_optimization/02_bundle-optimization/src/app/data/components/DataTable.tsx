import { Product } from "../types";

export default function DataTable({ currentPageData }: {
    currentPageData: Product[]
}) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">상품명</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">카테고리</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">가격</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">재고</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">평점</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentPageData.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.price.toLocaleString()}원
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.stock}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ⭐ {item.rating}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}