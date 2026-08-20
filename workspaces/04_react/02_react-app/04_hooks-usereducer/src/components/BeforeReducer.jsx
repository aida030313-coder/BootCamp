import { useState } from 'react'

// reducer 개념 사용 전 - useState를 활용한 상태 관리
function BeforeReducer() {

    const [count, setCount] = useState(0);

    const handleCountIncrease = () => {
        setCount(count + 1);
    }

    const handleCountDecrease = () => {
        setCount(count - 1);
    }

    const handleCountReset = () => {
        setCount(0);
    }

    const handleCountIncreaseByNum = (num) => {
        setCount(count + num)
    }

    return (
        <>
            <h2>카운트: {count}</h2>
            <button onClick={handleCountIncrease}>+1 증가</button>
            <button onClick={handleCountDecrease}>-1 감소</button>
            <button onClick={handleCountReset}>초기화</button>
            <button onClick={() => handleCountIncreaseByNum(5)}>+5</button>
        </>
    )
}

export default BeforeReducer
