import React from 'react'
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example5 from './components/Example5';
import Example6 from './components/Example6';
import Example7 from './components/Example7';

function App() {

  const [number, setNumber] = React.useState(0)   // [ state의 초기값, state를 변경시켜주는 함수]

  const handleIncrease = () => {
    // number++;
    setNumber(number + 1);
  }

  const handleDecrease = () => {
    setNumber((prev) => prev - 1);
  }

  return (
    <>
      <h2>useState 연습</h2>

      <div>
        <h1>{number}</h1>
        <button onClick={handleIncrease}> +1 </button>
        <button onClick={handleDecrease}> -1 </button>
      </div>

      <hr/>
      <Example1/>
      <hr/>
      <Example2/>
      <hr/>
      <Example3/>
      <hr/>
      <Example4/>
      <hr/>
      <Example5/>
      <hr/>
      <Example6/>
      <hr/>
      <Example7/>
    </>
  )
}

export default App


/*
  1. React.useState()
    1) 함수형 컴포넌트에서 상태(state)를 선언하고 관리하기 위한 훅(Hooks) 입니다. 
      (여기서 상태란 컴포넌트에서 값이 변할 수 있는 데이터를 의미합니다.)
    2) useState()는 배열을 반환하며, 반환하는 배열의 첫 번째 요소는 현재 상태 값, 두 번째 요소는 상태 값을 변경하는 함수입니다.
    3) 리액트에서는 앞으로 주요 개발 방식으로 useState() 함수를 사용할 것이라고 발표했습니다.


  2. React.useState() 구문
    1) 형식
      const [state, setState] = React.useState(initialState)
    2) 설명
      (1) state
        - 상태 변수의 이름입니다.
        - 모든 타입의 값을 가질 수 있습니다.
        - state가 변하면 state가 사용되는 컴포넌트가 리렌더링됩니다.
      (2) setState
        - 상태 변수 값을 변경하는 상태 업데이트 함수입니다.
      (3) initialState
        - 상태 변수의 초깃값입니다.


  3. React의 상태 업데이트 함수의 두 가지 방식
    1) 값을 직접 전달하는 방식
    2) 함수(이전 상태 값을 받아 새로운 상태 값을 반환하는 함수)를 전달하는 방식 (함수형 업데이트)
*/