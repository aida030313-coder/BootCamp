import React from 'react'
import { useParams } from 'react-router-dom'

// 해당 페이지가 렌더링 되는 URL 주소는 아래처럼 될 수 있다고 가정
// /practice/it/2
// /practice/it/5
// /practice/history/5
// /practice/art/1

function Practice() {

    const { category, id } = useParams()

    return (
        <div>
            <h5>연습 페이지</h5>
            <p>현재 카테고리: {category}</p>
            <p>현재 아이디: {id}</p>
        </div>
    )
}

export default Practice
