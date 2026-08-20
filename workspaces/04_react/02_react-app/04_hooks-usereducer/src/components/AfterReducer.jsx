import { useReducer } from 'react'
import countReducer from '../reducers/countRecuder'

function AfterReducer() {

    const [count, dispatch] = useReducer(countReducer, 0)   // [0, f] ==> 0은 초기 state값, f는 액션을 발생시키는 함수
    
    return (
        <>
            <h2>카운트: {count}</h2>
            <button onClick={() => dispatch({type: "INCREASE"})}>+1 증가</button>
            <button onClick={() => dispatch({type: "DECREASE"})}>-1 감소</button>

            <button onClick={() => dispatch({type: "RESET"})}>초기화</button>
            <button onClick={() => dispatch({type: "ADD", payload: 5})}>+5 증가</button>
            <button onClick={() => dispatch({type: "MINUS", payload: 3})}>-3 감소</button>
        </>
    )
}

export default AfterReducer