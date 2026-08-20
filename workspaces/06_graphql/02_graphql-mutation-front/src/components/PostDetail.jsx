import React from 'react'
import { useQuery } from '@apollo/client/react'
import { GET_POST_DETAIL } from '../queries/postQueries';

function PostDetail({ postId }) {

    const { loading, error, data } = useQuery(GET_POST_DETAIL, { variables: { postId }})

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return (
        <div>
            <h2>선택된 게시글 상세 정보</h2>
            <p>Title: {data.post.title}</p>
            <p>Content: {data.post.content}</p>
            <p>Author: {data.post.author.username}</p>
        </div>
    )
}

export default PostDetail
