export default function Pagination({ totalPageCount, currentPage, setCurrentPage }: {
    totalPageCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}) {
    return (
        <>
            <div className="mt-4 flex justify-center gap-2">
                {Array.from({ length: Math.min(totalPageCount, 10) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded ${
                            currentPage === i + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
          </div>
        </>
    );
}