// 초기상태(장비구니 아이템 목록) 객체
// => 객체만 추가하면 되기 때문에 추후 확장성을 고려하기 쉬움
const initialState= {
    items: []
}

// state: 현재 상태 객체 { items: [...]}
// action: dispatch에 의해 전달되는 객체 {type: "액션타입(상태변경타입, payload: 상태 변경에 필요한 데이터)"}
function cartReducer(state, action) {
    switch(action.type) {
        // 액션 1) 장바구니에 추가(필요한 데이터: 추가할 상품 객체 {id, name, price})
        case 'ADD_TO_CART':
        // 기존에 아이템으로 추가되어있는지 확인
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if(existingItem) {   // 1-1) 장바구니에 이미 존재하는 아이템일 경우 -> 수량만 증가
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload ? {...item, quantity: Math.max(item.quantity - 1, 1)}
                                                   : item
                )}
            } else {   // 1-2) 장바구니에 없던 아이템이라면, 신규 추가
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {...action.payload, quantity: 1}
                    ]
                }
            }


        // 액션 2) 장바구니 아이템 삭제(필요한 데이터: 삭제할 아이템 id)
        case 'REMOVE_FROM_CART': 
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)   // 특정 아이템을 제외시킨 배열
            }

        // 액션 3) 장바구니 아이템 수량 증가 (필요한 데이터: 수량 증가할 아이템 id)
        case 'INCREASE_QUANTITY': 
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? {...item, quantity: item.quantity + 1}
                                               : item
                )
            }
            

        // 액션 4) 장바구니 아이템 수량 감소 (필요한 데이터: 수량 감소할 아이템 id)
        case 'DECREASE_QUANTITY': 
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? {...item, quantity: Math.max(item.quantity - 1, 1)}
                                               : item
                )
            }
            

        // 액션 5) 장바구니 전체 삭제
        case 'CLEAR_CART': 
            return initialState;

        default:
            return state;
    }
}

export { initialState, cartReducer };