import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Practice from './pages/Practice'

function App() {

  return (
    <>
      <nav>
        <Link to="/">HOME</Link> | <Link to="/about">About</Link> |
        <Link to="/profile/1"> 1번 회원 프로필 페이지 </Link> | <Link to="/profile/2"> 2번 회원 프로필 페이지 </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/profile/:uid' element={<Profile/>}/>
          <Route path="practice/:category/:id" element={<Practice/>}/>
          {/* http://localhost:5174/practice/art/3 */}

        </Routes>
      </main>
    </>
  )
}

export default App


/*
  1. 동적 라우팅 (dynamic routing)
    1) URL 경로 일부를 변수처럼 활용하여 동일한 컴포넌트로 다양한 데이터를 표시하도록 하는 라우팅 방식입니다. 
    2) 동적 세그먼트(동적 파라미터, 경로변수)를 통해 URL애 따라 컴포넌트가 동적으로 렌더링됩니다.
    3) 동적 세그먼트란?
      - 경로의 일부분에 변수처럼 값을 넣을 수 있는 시스템입니다.
      - 예를 들어, 특정 상품의 상세 페이지가 "/product/:pid" 형태라면, 
      실제 주소가 /product/123일 경우, pid에 123이라는 값이 들어갑니다.
        즉, 여러 상품들의 상세 페이지를 하나의 상세용 컴포넌트로 처리할 수 있습니다. 

  2. useParams()
    1) react-router-dom에서 제공하는 Hook 중 하나로, URL의 동적 파라미터 값(경로변수)을 가져올 때 사용합니다.
    2) useParams()는 동적 파라미터들을 객체 형식으로 반환합니다. 예: { pid: "123" }
    3) 동적 파라미터들은 항상 문자열 타입입니다. 숫자 등 다른 타입으로 바꾸려면 변환 작업을 직접 수행해야 합니다.
*/

/* 
  1. useNavigate()
    1) useNavigate는 react-router-domr에서 제공하는 훅으로, 다른 경로로 이동할 수 있는 함수를 반환합니다.
    2) 이 훅을 사용하면 컴포넌트 내에서 버튼 클릭이나 다른 이벤트에 따라 경로를 변경할 수 있습니다. 
*/