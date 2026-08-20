import { useState, useEffect } from 'react'

function Example4() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect 실행');

        // cleanup 함수 반환
        return () => {
            console.log('cleanup 실행됨');
        }
    });

    return (
        <div>
            <h2>카운터</h2>
            <h3>count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Example4
