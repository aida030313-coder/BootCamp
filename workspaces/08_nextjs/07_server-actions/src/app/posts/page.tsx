import Link from "next/link";
import { getPosts } from "./service";
import { deletePostAction } from "./actions";
import DeleteButton from "./DeleteButton";

export default async function PostListPage() {

    const posts = await getPosts();

    return (
        <div>
            <h2 className="text-2xl font-bold">게시글 목록</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title} - {post.author}</Link>

                        {/*
                            삭제 방법 1. 기존 리액트처럼 동작시키는 방법
                            1. 버튼을 클라이언트 컴포넌트로 분리
                            2. onClick 이벤트 핸들러 작성
                            3. 이벤트 핸들러에서 직접 백엔드 API 요청(브라우저 -> API 서버)
                            4. 요청 완료 후 실시간 UI 갱신을 위한 작업
                                - 목록 데이터를 상태 관리
                                - 목록 상태 업데이트(필터링) - 새 배열로 교체
                                - router.refresh() 호출
                        */}

                        {/*
                            삭제 방법 2. ServerAction 함수 사용 - form
                        */}
                        {/* <form action={deletePostAction.bind(null, post.id)}>
                            <button type="submit">[X]</button>
                        </form> */}

                        {/*
                            삭제 방법 3. ServerAction 함수 사용 + 클라이언트 컴포넌트(1, 2 방법의 절충안)
                        */}
                        <DeleteButton id={post.id}/>
                    </li>
                ))}
            </ul>
            <hr/>
            <Link href="/posts/new">등록페이지로 이동</Link>
        </div>
    );
}