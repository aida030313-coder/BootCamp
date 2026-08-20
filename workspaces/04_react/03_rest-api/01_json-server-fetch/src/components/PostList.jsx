import React from 'react'
import postAPI from '../api/postAPI';

function PostList({ posts, setSelectedPost, setPosts }) {

    const handlePostClick = async (e) => {
        // 특정 게시글 1개(자원) 조회(GET) 요청
        // 현재 조회할 게시글의 고유 ID
        const postId = e.target.dataset.postId;
        try {
            const post = await postAPI.getPostById(postId);
            setSelectedPost(post);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handlePostDeleteClick = async (e) => {
        // 이벤트 전파 막기(부모 이벤트 동작 막기)
        // 아니면 삭제 버튼 눌럿을 때, 에러 뜸(이벤트 버블링)
        e.stopPropagation();

        // 특정 게시글(자원) 삭제(DELETE) 요청
        const postId = e.target.closest('li').dataset.postId;
        
        try {
            await postAPI.deletePost(postId);
            const newPosts = await postAPI.getAllPosts();
            setPosts(newPosts);
            setSelectedPost(null);
        } catch(error) {
            console.log(error.message)
        }
    };

    if(posts.length === 0) return <div>게시글이 없습니다.</div>

    return (
        <div>
            <h2>게시글 목록</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} data-post-id={post.id} onClick={handlePostClick}>
                        {post.title}
                        <button onClick={handlePostDeleteClick}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList
