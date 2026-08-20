import Link from "next/link";

export default function PostPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">게시글 목록</h1>

            <Link href={"/posts/new"}>게시글 작성</Link>

            <hr />

            <ul>
                <li><Link href="/posts/1">게시글 1</Link></li>
                <li><Link href="/posts/2">게시글 2</Link></li>
                <li><Link href="/posts/3">게시글 3</Link></li>
            </ul>

            <hr />

            <Link href={"/posts/search?condition=title&keyword=안녕"}>검색 조건: (title), 키워드(안녕) - 검색 요청</Link>
        </div>
    );
}