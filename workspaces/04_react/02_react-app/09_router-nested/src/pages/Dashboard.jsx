import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {

    const dashboardData = {
        numOfUsers: 100,
        numOfOrders: 1000
    }
    
    return (
        <div>
            <h2>대시보드</h2>
            <nav>
                <Link to="">대시보드 홈</Link> | <Link to="setting">설정</Link> | <Link to="analytics">분석</Link>
            </nav>

            <div>
                <h4>대시보드 컨텐츠</h4>
                <Outlet context={dashboardData} />
            </div>
        </div>
    )
}

export default Dashboard
