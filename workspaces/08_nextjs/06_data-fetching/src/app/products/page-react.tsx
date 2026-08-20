'use client'

import { Product } from "@/types";
import { useEffect, useState } from "react";

// api 요청으로 데이터 fetching하는 경우
async function getProducts(): Promise<Product[]> {
    const response = await fetch("http://localhost:4000/products")   // Promise<Response>
    if(!response.ok) {
        throw new Error('데이터를 불러오는데 문제가 있습니다.');
    }

    const data: Product[] = await response.json();   // Promise<{}, {}: any>
    return data
}

export default function ProductListPage() {

    const [products, setProducts] = useState<Product[]>([]);

    // 마운트 - 데이터페칭
    useEffect(() => {   // react는 컴포넌트 본문에서 await를 사용하지 못함
        const fetchData = async () => {
            const products: Product[] = await getProducts()   // Promise<Products[]>
            setProducts(products)
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold">상품 목록</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/*
    리액트(CSR) 실행 흐름
    1. 페이지 요청(브라우저 -> 서버)
    2. 컨텐츠가 비어있는 HTML이 제작되어 응답(서버 -> 브라우저)
    3. 데이터 요청 ** (브라우저 -> API 서버) => API 노출
    4. 데이터 응답    (API 서버 -> 브라우저)
    5. 상테 업데이트  (브라우저 - JS 실행)
    6. UI 재렌더링   (브라우저 - JS 실행)
*/