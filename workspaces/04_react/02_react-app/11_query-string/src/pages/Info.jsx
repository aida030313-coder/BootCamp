import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Info() {

    const [searchParams] = useSearchParams()   // [URLSearchParams 객체, 쿼리스트링 수정할 수 있는 함수]

    const name = searchParams.get('name') || 'Guest';
    const age = searchParams.get('age') || '0';

    return (
        <div>
            <h5>Info 페이지</h5>
            <p>
                Welcome {name}! <br/>
                {age > 0 && `You are ${age} years old. `}
            </p>
        </div>
    )
}

export default Info
