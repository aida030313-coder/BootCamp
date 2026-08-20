'use client'

import { createPostAction } from "../actions";
import CreateButton from "./CreateButton";
import { useActionState } from "react";

// 기존 react 방식
export default function PostCreatePage() {

    // Server Action 결과를 React state처럼 받아서 UI에 바로 뿌리는 도구
    const [state, formAction] = useActionState(createPostAction, {
        success: false,
        message: '',
        errors: {}
    })   // [상태, 액션함수]

    return (
        <form
            action={formAction}
            className="flex flex-col max-w-100 gap-4 m-4">
            {!state.success && state.message && (
                <div className="bg-red-100 text-red-600 rounded">
                    {state.message}
                </div>
            )}
            <input
                type="text"
                name="title"
                placeholder="제목"
                className="border rounded border-gray-300 p-1"
                required
            />
            {state.errors?.title && (
                <div className="bg-red-100 text-red-600 rounded">
                    {state.errors.title}
                </div>
            )}
            <textarea
                name="content"
                placeholder="내용"
                className="border rounded border-gray-300 p-1"
                required
            />
            {state.errors?.title && (
                <div className="bg-red-100 text-red-600 rounded">
                    {state.errors.content}
                </div>
            )}
            <input
                type="text"
                name="author"
                placeholder="작성자"
                className="border rounded border-gray-300 p-1"
            />
            {state.errors?.title && (
                <div className="bg-red-100 text-red-600 rounded">
                    {state.errors.author}
                </div>
            )}
            <CreateButton/>
        </form>
    );
}