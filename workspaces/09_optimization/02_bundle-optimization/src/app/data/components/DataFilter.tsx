export default function DataFilter({
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    categories
}: {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    categories: Record<string, Record<string, string[]>>;
}) {
    return (
        <>
            {/* 필터 영역 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      카테고리
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="전체">전체</option>
                      {Object.keys(categories).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    검색
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="상품명 또는 설명으로 검색..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
        </>
    );
}