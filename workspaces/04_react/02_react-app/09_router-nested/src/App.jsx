import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting'
import Analytics from './pages/Analytics'

function App() {

  return (
    <>
      <nav style={{background: "lightblue", height: '60px', color: 'white', lineHeight: '60px', padding: '0 20px'}}>
        <Link to="/">홈</Link> | <Link to="dashboard">대시보드</Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>   {/* 부모 라우트 */}

            {/* 자식 라우트는 부모 라우트에서 타고 들어가기 때문에 path에 슬래시(/)를 또 쓰면 안된다 */}
            <Route path="setting" element={<Setting/>}/>       {/* 자식 라우트 */}
            <Route path="analytics" element={<Analytics/>}/>       {/* 자식 라우트 */}
            
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App


/*
  1. 중첩 라우팅(Nested Routing)
    1) 부모 라우트 컴포넌트 안에서 자식 라우트 컴포넌트를 정의하는 방식입니다. 
    2) 중첩 경로 작성시 슬래시(/)로 시작하지 않도록 주의합니다. 
      (중첩 경로는 부모 경로에 상대 경로로 자식 경로를 표현합니다.)

  2. <Outlet>
    1) 중첩된 라우팅 구조에서 자식 라우트 컴포넌트가 렌더링되는 위치를 지정하는 컴포넌트입니다.
    2) Outlet에 표현되는 자식 라우트 컴포넌트로 Context를 통해 데이터를 전달할 수 있습니다.
    3) 자식 라우트 컴포넌트에서는 useOutletContext() 훅을 사용하여 Context에 저장된 데이터를 읽을 수 있습니다.
*/
