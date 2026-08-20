'use client'

import { useFormStatus } from "react-dom";


export default function CreateButton() {

    // useFormStatus
    const {pending} = useFormStatus();   // {pending: boolean}

    return (
        <button
                type="submit"
                className="bg-blue-200 rounded text-blue-700 font-bold mt-2 p-2"
        >
            {pending ? "등록 중..." : "등록"}
        </button>
    );
}