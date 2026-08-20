'use client'

import { useRouter } from "next/navigation";
import { useTransition } from "react";

type ErrorProps = {
    error: Error;
    reset: () => void
}

export default function Error({error, reset}: ErrorProps) {   // { error: Error 객체, reset: 함수 }

    const router = useRouter();   // refresh

    const [isPending, startTransition] = useTransition();   // [실행 중 여부. 함수]

    const handleReset = () => {
        startTransition(() => {
            router.refresh();       // 서버에 새 데이터를 줘.라는 요청
            reset();                // 위에서 받은 새 데이터로 화면을 다시 그려줘.라는 요청
        })
    }

    return (
        <div className="p-8">
            <p className="text-center text-gray-500 mt-4">
                {error.message || '알 수 없는 오류가 발생했습니다. '}
            </p>
            <div className="text-center">
                <button
                    className="px-4 py-2 bg-red-500 rounded text-white mt-2 hover:bg-red-600"
                    onClick={handleReset}
                >다시 시도</button>
            </div>
        </div>
    );
}