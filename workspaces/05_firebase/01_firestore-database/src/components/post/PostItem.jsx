import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deletePost } from '../../services/postService';

// 한 게시글 정보를 표현하는 컴포넌트
/*
    props 정의
    {
        post: {
            id: string,
            title: string,
            content: string,
            createdAt: Timestamp
        },
        mode: string              // 'List' | 'detail'
    }
*/

function PostItem({ post, mode }) {

    const navigate = useNavigate();

    const handlePostClick = () => {
        if(mode === 'list') {
            navigate(`/posts/${post.id}`)
        }
    }

    const handlePostDeleteClick = async () => {
        if(confirm('해당 게시글을 삭제하시겠습니까?')) {
            await deletePost(post.id);   // 게시글 삭제
            navigate('/posts');          // 목록페이지로 이동
        }
    }

    const handlePostUpdateClick = () => {
        navigate(`/posts/${post.id}/edit`);
    }

    return (
        <div style={{
                border: '1px solid black', 
                margin: '10px', 
                padding: '10px',
                cursor: mode === 'list' ? 'pointer' : 'default'
            }}
                onClick={handlePostClick}>
            {post.title} {mode === 'list' && `(${post.createdAt.toDate().toLocaleString()})`}

            {mode === 'detail' && (
                <>
                    <p>{post.content}</p>
                    <button onClick={handlePostUpdateClick}>수정</button>
                    <button onClick={handlePostDeleteClick}>삭제</button>
                </>
            )}
        </div>
    )
}

export default PostItem
