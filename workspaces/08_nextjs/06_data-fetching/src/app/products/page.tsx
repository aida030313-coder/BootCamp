import { Product } from "@/types";
import Link from "next/link";
import { resolve } from "path";

// api 요청으로 데이터 fetching하는 경우
async function getProducts(): Promise<Product[]> {

    // loading 확인용 - 3초 딜레이
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const response = await fetch("http://localhost:4000/products", {
        // cache: 'force-cache'   // SSG(default) - 빌드 시점에 HTML 고정(즉, 빌드 시점에 불러온 데이터로 페이지 고정)
        // cache: 'no-store'      // SSR - 페이지 요청시마다 매번 데이터를 가져와서 새로이 HTML을 제작(최신 데이터 보장)
        next: { revalidate: 30}      // ISR - 60초 동안은 캐시 유지
    })   // Promise<Response>

    // error 확인용 - 50% 확률로 에러 발생
    if(Math.random() > 0.7) {
        throw new Error('50% 확률로 발생된 에러')
    }

    if(!response.ok) {
        throw new Error('데이터를 불러오는데 문제가 있습니다.');
    }

    const data: Product[] = await response.json();   // Promise<{}, {}: any>
    return data
}

export default async function ProductListPage() {

    const products = await getProducts();   // Promise<Product[]>
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div>
            <h2 className="text-2xl font-bold">상품 목록</h2>
            <p>Rendered Time: {currentTime}</p>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/*
    Next.js 서버 컴포넌트 - 비동기 함수가 될 수 있음
    1. 페이지 요청 (브라우저 -> 서버)
    2. 데이터 요청 ** (서버 -> API 서버)   => 서버 to 서버 통신이라 API 노출 X
    3. 데이터 응답    (API 서버 -> 서버)
    4. 조회된 데이터(컨텐츠)가 채워져 있는 HTML이 제작되어 응답 (서버 -> 브라우저) => SEO 좋음
*/