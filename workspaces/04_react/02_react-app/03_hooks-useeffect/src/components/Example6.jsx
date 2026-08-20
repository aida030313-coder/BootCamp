import { useState, useEffect } from 'react'

function Example6() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(jsonData => setPosts(jsonData));
    }, []);

    return (
        <>
            <h2>전체 게시글 목록</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    )
}

export default Example6


/* useEffect를 통해서 데이터 불러오기
    1. 초기 state - 빈 배열로 설정
    2. 컴포넌트 초기 렌더링
        - return문 실행
        - 화면에 빈 배열로 렌더링(아무것도 안보임)
        - Mount

    3. useEffect의 setup 함수 실행
        - fetch 시작(데이터 요청 보내놓기)

    4. fetch 완료
        - 데이터 받아짐
        - setPosts(데이터) 실행
        - state 업데이트

    5. 컴포넌트 리렌더링
        - return문 실행
        - 응답된 데이터가 담겨있는 posts 기반으로 렌더링
*/