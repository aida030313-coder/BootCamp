import { useState, useEffect } from 'react'

function Example1() {

    const [message, setMessage] = useState('안녕하세요');

    console.log('렌더링....');

    useEffect(() => {
        console.log('렌더링 이후 동작....?');
    })

    const handleClick = () => {
        setMessage('안녕하세요!!!!!!!');
    }

    return (
        <div>
            <button onClick={handleClick}>메시지 변경</button>
            <h1>{message}</h1>
            {console.log('렌더링 시 출력...')}
        </div>
    );

    // 이 위치에서 무언가 동작하게 하고 싶지만 안된다.
    // useEffect를 이용해서 처리해야 한다.
    // console.log('렌더링 이후 동작...?');
}

export default Example1
