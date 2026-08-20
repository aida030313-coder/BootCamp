import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <div className='app-container'>
        <ProductList/>
        <Cart/>
      </div>
    </>
  )
}

export default App


/*
  1. Redux 
    1) 자바스크립트 기반 앱(특히 리액트)에서 상태(state)를 효율적으로 관리하기 위한 라이브러리입니다.
    2) 주요 특징 
      - 단일 진실 원천 (Single Source of Truth)
      - 읽기 전용 상태 (Read-only state)
      - 순수 함수 기반 상태 변경 (Reducer)
    3) 중앙 저장소(store)에 앱 전체 상태를 보관합니다. 
    4) 대규모 애플리케이션에서 복잡한 컴포넌트 간 상태 공유 문제를 해결하고, 상태 일관성을 보장합니다. 

  2. Redux Toolkit
    1) 기존의 Redux의 복잡한 설정과 반복적인 부분(보일러플레이트 코드)을 줄여주기 위해 
       Redux 공식팀에서 만든 Redux의 유지/개선용 라이브러리입니다. (공식 권장 도구)
    2) 주요 특징 및 기능 
      - configureStore, createSlice, createAsyncThunk 등 쉬운 API를 제공합니다. 
      - Immer 라이브러리가 내장되어 불변성 코드를 신경쓸 필요 없이 state를 직접 변경해도 안전하게 작동합니다. 
      - thunk 등 비동기 로직도 기본 내장되어 있어 비동기 작업을 쉽게 처리할 수 있습니다. 

  3. 라이브러리 설치 
    npm install @reduxjs/toolkit react-redux
*/