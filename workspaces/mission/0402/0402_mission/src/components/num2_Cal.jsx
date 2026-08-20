import React, { useState } from 'react'

function num2_Cal() {

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');

    const handleFirst = (e) => {
        setFirst(e.target.value)
    }

    const handleSecond = (e) => {
        setSecond(e.target.value)
    }

    // 입력받은 데이터를 문자열->숫자로 변환
    const num1 = Number(first);
    const num2 = Number(second);

    return (
        <>
            <h2>간단한 계산기</h2>
            숫자 1: 
            <input
                type='number'
                value={first}
                onChange={handleFirst}
            />
            <br/>
            숫자 2: 
            <input
                type='number'
                value={second}
                onChange={handleSecond}
            />
            <br/>

            덧셈: {first} + {second} = {num1 + num2}<br/>
            뺄셈: {first} - {second} = {num1 - num2}<br/>
            곱셈: {first} x {second} = {(num1 * num2).toFixed(2)}<br/>
            나눗셈: {first} ÷ {second} = {(num1 / num2).toFixed(2)}<br/>
        </>
    )
}

export default num2_Cal
