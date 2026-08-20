import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Analytics() {

    const {numOfUsers, numOfOrders} = useOutletContext()

    return (
        <div>
            <h5>대시보드 - 분석 페이지</h5>
            <p>유저 수: {numOfUsers}</p>
            <p>주문 수: {numOfOrders}</p>
        </div>
    )
}

export default Analytics
