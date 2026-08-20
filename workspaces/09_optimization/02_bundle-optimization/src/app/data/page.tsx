import Link from "next/link";

import sumBy from "lodash/sumBy";
import meanBy from "lodash/meanBy";
import maxBy from "lodash/maxBy"
import minBy from "lodash/minBy";
import countBy from "lodash/countBy";

import { Product } from "./types";
import StatCards from "./components/StatCard";
import Products from "./components/products";

async function getProducts(): Promise<Product[]> {
  return  Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `상품 ${i + 1}`,
    category: ["전자기기", "의류", "식품", "도서", "생활용품"][i % 5],
    price: Math.floor(Math.random() * 1000000) + 10000,
    stock: Math.floor(Math.random() * 100),
    description: `이것은 상품 ${i + 1}의 상세 설명입니다. 매우 훌륭한 상품이며 고객 만족도가 높습니다. ` +
      `다양한 용도로 활용할 수 있으며, 품질이 우수합니다. 지금 바로 구매하세요!`,
    tags: ["인기", "신상", "할인", "베스트셀러", "추천상품"].filter(() => Math.random() > 0.5),
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    seller: `판매자${Math.floor(i / 10) + 1}`,
    createdAt: new Date(2024, 0, Math.floor(i / 30) + 1).toISOString(),
  }));
}

async function getCategories(): Promise<Record<string, Record<string, string[]>>> {
  return {
    "전자기기": {
      subcategories: ["스마트폰", "노트북", "태블릿", "이어폰", "스마트워치"],
      filters: ["가격대", "브랜드", "리뷰점수", "배송"],
      sortOptions: ["인기순", "가격낮은순", "가격높은순", "최신순"],
    },
    "의류": {
      subcategories: ["상의", "하의", "아우터", "신발", "액세서리"],
      filters: ["사이즈", "색상", "브랜드", "가격대"],
      sortOptions: ["인기순", "판매량순", "가격순"],
    },
    "식품": {
      subcategories: ["과일", "채소", "육류", "수산물", "가공식품"],
      filters: ["원산지", "유통기한", "가격대"],
      sortOptions: ["신선도순", "가격순", "인기순"],
    },
    "도서": {
      subcategories: ["소설", "에세이", "자기계발", "경제경영", "IT"],
      filters: ["저자", "출판사", "출간일", "베스트셀러"],
      sortOptions: ["인기순", "최신순", "평점순"],
    },
    "생활용품": {
      subcategories: ["주방용품", "욕실용품", "청소용품", "수납용품"],
      filters: ["브랜드", "가격대", "용량"],
      sortOptions: ["판매량순", "가격순", "리뷰순"],
    },
  }
}

export default async function DataPage() {

  const products = await getProducts();
  const categories = await getCategories();

  

  // 통계 계산 
  const stats = {
    totalItems: products.length,
    totalValue: sumBy(products, (item) => item.price * item.stock),
    avgPrice: meanBy(products, "price"),
    maxPrice: maxBy(products, "price")?.price,
    minPrice: minBy(products, "price")?.price,
    categories: countBy(products, "category"),
  };

  


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">데이터 페이지</h1>
          <Link 
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            홈으로
          </Link>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">이 페이지의 문제점 해결</h3>
              <div className="mt-2 text-sm text-green-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>1000개 아이템의 큰 배열을 인라인으로 정의 → API 요청으로 데이터 페칭</li>
                  <li>복잡한 데이터 처리 로직, 컴포넌트들이 하나의 페이지 클라이언트 컴포넌트로 구현
                     → 컴포넌트 분리 후 페이지 컴포넌트를 서버 컴포넌트로 적용</li>
                  <li>lodash 전체를 import → 필요한 함수만 import</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 통계 카드 */}
        <StatCards stats={stats} />

        {/* 상품 관련 */}
        <Products products={products} categories={categories} stats={stats} />

      </div>
    </div>
  );
}

