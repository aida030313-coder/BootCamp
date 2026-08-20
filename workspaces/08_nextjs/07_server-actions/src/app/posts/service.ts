import { CreatePostDto, Post, UpdatePostDto } from "./types";

// 백엔드 API와의 통신 (1:1)

// 목록 조회용
export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch("http://localhost:4000/posts/")
    if(!response.ok) {
        throw new Error('데이터를 가져오는데 실패하였습니다.');
    }
    const data: Post[] = await response.json();
    return data;
}

// 상세 조회용
export const getPostById = async(id: string): Promise<Post> => {
    const response = await fetch(`http://localhost:4000/posts/${id}`)
    if(!response.ok) {
        throw new Error('데이터를 가져오는데 실패하였습니다.');
    }
    const data: Post = await response.json();
    return data;
}

// 등록용 - 방식: POST, BODY: 등록객체 => JSON문자열
export const createPost = async(post: CreatePostDto): Promise<Post> => {
    const response = await fetch('http://localhost:4000/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    if(!response.ok) {
        throw new Error('데이터를 가져오는데 실패하였습니다.');
    }
    const data: Post = await response.json();
    return data;
}

// 수정용
export const updatePost = async (id: string, post: UpdatePostDto): Promise<Post> => {
    const response = await fetch(`http://localhost:4000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    if(!response.ok) {
        throw new Error('데이터를 가져오는데 실패하였습니다.');
    }
    const data: Post = await response.json();
    return data;
}

// 삭제용
export const deletePost = async (id: string): Promise<Post> => {
    const response = await fetch(`http://localhost:4000/posts/${id}`, {
        method: 'DELETE'
    });
    if(!response.ok) {
        throw new Error('데이터를 가져오는데 실패하였습니다.');
    }
    const data: Post = await response.json();
    return data;
}