import { useMutation } from '@apollo/client/react';
import React, { useState } from 'react'
import { CREATE_POST, GET_ALL_POSTS } from '../queries/postQueries';

function PostForm() {

    const [ formData, setFormData ] = useState({
        title: '',
        content: '',
        authorId: ''
    })

    // [mutation을 실행시킬 함수, {loading, error, data}]
    const [createPostSubmit, {loading, error, data}] = useMutation(
        CREATE_POST,
        {
            // mutation 성공 후 refetch(다시 실행)할 쿼리
            refetchQueries: [GET_ALL_POSTS]
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault();

        createPostSubmit({
            variables: {
                ...formData
            }
        })

        // 등록 완료 후 1) 입력값 초기화
        setFormData({
            title: '',
            content: '',
            authorId: ''
        })

        // 2) 게시글 목록 갱신 - refetchQueries 옵션에 의해 자동 처리

    }

    return (
        <div>
            <h2>게시글 등록</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='제목'
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                <br/>
                <input
                    type='text'
                    placeholder='내용'
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                />
                <br/>
                <input
                    type='text'
                    placeholder='작성자ID'
                    value={formData.authorId}
                    onChange={(e) => setFormData({...formData, authorId: e.target.value})}
                />
                <br/>
                <button
                    type='submit'
                    disabled={loading}
                >
                    { loading ? "게시글 등록중..." : "게시글 등록" }
                </button>
            </form>
            { data && <p>{data.createPost.title} 게시글이 등록되었습니다. </p>}
        </div>
    );
}

export default PostForm;
