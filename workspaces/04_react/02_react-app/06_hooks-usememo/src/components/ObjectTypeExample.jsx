import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function ObjectTypeExample() {

    console.log('해당 컴포넌트 렌더링됨...');

    const [inputValue, setInputValue] = useState('');   // tv 객체와 아무 관계없는 state
    const [isSale, setIsSale] = useState(false);        // tv 객체와 관계있는 state


    // 컴포넌트 렌더링 시마다 새로운 객체가 생성됨(참조값이 매번 달라짐)
    // -> useEffect의 의존성을 비교에서 변경으로 인식될 수 있음
    // const tv = {
    //     brand: 'samsung',
    //     size: 65,
    //     price: isSale ? '할인가 100만원' : '정가 200만원'
    // }

    
    // isSale 값이 변경될 때만 새로운 객체 생성
    const tv = useMemo(() => {
        return {
            brand: 'samsung',
            size: 65,
            price: isSale ? '할인가 100만원' : '정가 200만원'
        }
    }, [isSale]);


    useEffect(() => {
        console.log('현재 tv 객체 정보', tv);
    }, [tv]);

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            />
            <br/>
            <button onClick={() => setIsSale(!isSale)}>할인 여부 변경</button>
        </>
    )
}

export default ObjectTypeExample
