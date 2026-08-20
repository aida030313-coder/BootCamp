import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <nav>
        {/* <a href="/">홈</a> | <a href="/about">소개</a> | <a href="/contact">문의</a> */}
        <Link to="/">홈</Link> | <Link to="/about">소개</Link> | <Link to="/contact">문의</Link>
      </nav>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route index element={<Home/>}/>   {/* 부모 Route에 들어갔을 때 기본적으로 어떤 화면을 index로 잡을지 */}
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App


/*
  1. 라우팅(Routing)이란? 
    1) 어떤 요청을 어디로 안내 및 매핑 할 것인지를 결정하는 과정입니다. 
    2) 사용자가 웹 앱에서 특정 URL을 입력하거나 클릭에 의해 URL이 요청됐을 때, 
       그 URL에 해당하는 화면을 보여주는 과정을 의미합니다. 
    3) 웹 라우팅 방식 
      (1) 서버 사이드 
        - 서버측으로 URL 요청 -> 서버에서 해당 요청에 맞는 완성된 HTML을 제작하여 응답 -> 브라우저에서 해당 HTML을 렌더링 
        - 장점: 초기 페이지 진입 속도가 빠르며, SEO(검색엔진최적화)에 유리함
        - 단점: 페이지 이동시마다 서버에 요청이 발생하여 전체 페이지가 새로고침 (페이지 전환 시 깜빡임, 로딩 발생)
      (2) 클라이언트 사이드 
        - 한 번만 HTML 페이지를 불러오고, 이후에는 JS로 화면 전환 
        - 단점 : SEO 친화적이지 않음, 초기 로딩 시 모든 JS/CSS/HTML을 받아오므로 초기 진입 속도가 느릴 수 있음
        - 장점 : 이후 라우팅(페이지 이동)에서는 URL은 바뀌지만 전체 페이지가 새로 고쳐지지 않아 빠른 화면 전환, 부드러운 UX 제공
  
  2. react-router-dom 라이브러리
    1) 리액트 라우팅을 위한 라이브러리입니다. 
    2) 설치 방법
      - npm install react-router-dom
    3) 제공하는 주요 컴포넌트
      - BrowserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
      - Routes  : Route들을 묶어주는 단위(컴포넌트)
      - Route   : url 요청 주소와 컴포넌트를 매핑해 주는 단위(컴포넌트)
      - Link    : 클릭 시 페이지 이동(클라이언트 사이드 라우팅방식으로)을 위한 컴포넌트 
      - NavLink : 활성화 상태(active) 관리 기능이 있는 Link 컴포넌트

  3. 정적 라우팅(Static Routing)
    1) 기본 라우팅 방식입니다.
    2) URL 경로와 컴포넌트를 미리 정의해두는 방식입니다. 
    3) URL 경로가 항상 동일합니다. 
*/