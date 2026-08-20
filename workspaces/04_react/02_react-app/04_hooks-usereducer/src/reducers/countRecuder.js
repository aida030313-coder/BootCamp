// 상태 변경 로직을 컴포넌트 외부 함수(reducer)로 관리
function countReducer(state, action) {
// state=현재 상태 값, action={type:"요청 관련 타입", payload: 요청 처리 시 필요한 데이터}
    switch(action.type) {
        case "INCREASE" :
            return state + 1;
        case "DECREASE" :
            return state - 1;
        case "RESET" :
            return 0;
        case "ADD" :
            return state + action.payload;
        case "MINUS" :
            return state - action.payload;
        default:
            return state;
    }
}

export default countReducer