import { useEffect, useState } from 'react'

// 의존성 배열이 빈 배열일 경우 - 최초 렌더링시에만 (Mount) -> componentDidMount
function Example2() {

    const [ now, setNow ] = useState(new Date().toLocaleTimeString());

    console.log('렌더링....');

    useEffect(() => {
        console.log('렌더링 이후 동작');
    }, [])

    const handleClick = () => {
        setNow(new Date(). toLocaleTimeString());
    }

    return (
        <div>
            <button onClick={handleClick}>현재 시간 확인하기</button>
            <h2>현재 시간: {now} </h2>
        </div>
    )
}

export default Example2
