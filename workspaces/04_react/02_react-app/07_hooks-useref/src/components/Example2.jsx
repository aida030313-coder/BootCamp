import React, { useEffect, useRef } from 'react'

// DOM 요소 직접 접근하는 사용 예시
function Example2() {

    // 컴포넌트 렌더링 시 해당 텍스트 상자에 focusing 효과 주기
    const inputRef = useRef();   // { current: undefined}

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <>
            <input
                type="text"
                ref={inputRef}   // inputRef = { current: input DOM 요소 객체}
            />
        </>
    )
}

export default Example2
