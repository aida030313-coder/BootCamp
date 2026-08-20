'use client'

import { useState } from "react";
import { CreatePostDto } from "../types";
import { createPost } from "../service";
import { useRouter } from "next/navigation";

// 기존 react 방식
export default function PostCreatePage() {

    const router = useRouter(); 

    const[formData, SetFormData] = useState<CreatePostDto>({
        title: "",
        content: "",
        author: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        SetFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createPost(formData);
        alert("게시글이 성공적으로 등록되었습니다.");
        SetFormData({title: "", content: "", author: ""});
        router.push('/posts');
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="flex flex-col max-w-100 gap-4 m-4">
            <input
                type="text"
                name="title"
                placeholder="제목"
                className="border rounded border-gray-300 p-1"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="content"
                placeholder="내용"
                className="border rounded border-gray-300 p-1"
                value={formData.content}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="author"
                placeholder="작성자"
                className="border rounded border-gray-300 p-1"
                value={formData.author}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="bg-blue-200 rounded text-blue-700 font-bold mt-2 p-2"
            >등록</button>
        </form>
    );
}