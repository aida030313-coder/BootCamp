import React, {useState} from 'react'

function Example7() {

    const [message, setMessage] = useState('기본상태');
    const [color, setColor] = useState('black');
    const [backgroundColor, setBackgroundColor] = useState('white');

    const onClickEnter = () => setMessage("안녕하세요!");
    const onClickLeave = () => setMessage("안녕히가세요~");

    return (
        <>
            <h1 style={ { color, backgroundColor }}>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>

            <button onClick={() => setColor('red')}>빨간색</button>
            <button onClick={() => setColor('purple')}>보라색</button>
            <button onClick={() => setColor('green')}>초록색</button>

            <button onClick={() => setBackgroundColor('white')}>기본 배경</button>
            <button onClick={() => setBackgroundColor('black')}>반전 배경</button>
        </>
    )
}

export default Example7
