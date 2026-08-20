import { Product } from "@/types";

interface ProductDetailPageProps {
    params: Promise<{
        id: string
    }>
}

// api 호출하는 함수
async function getProduct(id: string): Promise<Product> {
    const response = await fetch(`http://localhost:4000/products/${id}`);
    if(!response.ok) {
        throw new Error('데이터 페칭에 실패하였습니다.');
    }

    const data: Product = await response.json();
    return data;
}

export default async function ProductDetailPage({params}: ProductDetailPageProps) {   // { params: Prpmise<id: "xx"> }

    const {id} = await params;
    const product = await getProduct(id);

    return (
        <div>
            <h2 className="text-2xl font-bold">상품 상세</h2>
            <p>상품명: {product.name}</p>
            <p>상품 가격: {product.price.toLocaleString()}원</p>
            <p>상품 재고: {product.stock}</p>
        </div>
    );
}