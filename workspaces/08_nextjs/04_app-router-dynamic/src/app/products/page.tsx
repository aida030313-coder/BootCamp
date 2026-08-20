import Link from "next/link";

export default function ProductsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">상품</h1>

            <ul>
                <li><Link href="/products/tech">전자제품</Link></li>
                <li><Link href="/products/tech/mouse">마우스</Link></li>
                <li><Link href="/products/tech/keyboard">키보드</Link></li>
                <li><Link href="/products/furniture">가구</Link></li>
                <li><Link href="/products/furniture/table">가구 - 테이블</Link></li>
                <li><Link href="/products/furniture/table/wood">가구 - 테이블 - 원목</Link></li>
            </ul>
        </div>
    );
}