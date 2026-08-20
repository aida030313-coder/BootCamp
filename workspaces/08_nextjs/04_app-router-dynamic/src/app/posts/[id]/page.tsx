import Link from "next/link";

interface PostDetailPageProps {
    params: Promise<{ id: string }>
}

// next.js의 특징: 모든 컴포넌트가 기본적으로 서버 컴포넌트이고, 비동기 함수로 만들 수 있다.
export default async function PostDetailPage({ params }: PostDetailPageProps) {   // props === { params : Promise{id: "xx"}}

    // const { id } = useParams()   // { id: "xx" } => React 방법
    const { id } = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold">게시글 상세</h1>
            <p>게시글 ID: { id }</p>
            <hr />
            <Link href={`/posts/${id}/edit`}>수정 페이지로 이동</Link>
        </div>
    );
}