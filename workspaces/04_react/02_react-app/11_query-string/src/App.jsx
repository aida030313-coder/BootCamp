import { Link, Routes, Route } from 'react-router-dom'
import Info from './pages/Info'

function App() {

  return (
    <>
      <nav>
        <Link to="/">홈</Link> | 
        <Link to="/Info">Info1</Link> | 
        <Link to="/Info?name=홍길동">Info2</Link> | 
        <Link to="/Info?name=김길동&age=20">Info3</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/Info" element={<Info/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App


/*
  1. 쿼리 스트링(Query String)
    1) URL에서 ? 뒤에 오는 key=value 쌍 형태의 데이터입니다. 여러 데이터를 &로 구분하여 전달할 수 있습니다.
    2) 주로 페이지/컴포넌트에 필요한 파라미터를 전달할 때 사용합니다.
    3) react-router-dom에서 제공하는 useSearchParams 훅을 통해 쿼리 스트링 값을 가져오거나 수정할 수 있습니다. 

  2. useSearchParams()
    1) react-router-dom에서 제공하는 훅으로, URL의 쿼리 스트링 파라미터에 접근하고 수정할 수 있는 기능을 제공합니다.
    2) 배열을 반환하며, 첫 번째 요소는 URLSearchParams 객체이고, 두 번째 요소는 쿼리 스트링을 수정할 수 있는 함수입니다.
    3) 예시
      const [searchParams] = useSearchParams();
      const name = searchParams.get('name');
      const age = searchParams.get('age');
    4) 쿼리 스트링 값은 항상 문자열(string) 타입입니다. 숫자 등 다른 타입으로 사용하려면 변환이 필요합니다.
*/
