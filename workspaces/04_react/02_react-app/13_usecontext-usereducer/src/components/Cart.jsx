import React, { useContext } from 'react'
import './Cart.css'
import CartItem from './CartItem';
import { CartContext } from '../App';

function Cart() {

    const { items, dispatch } = useContext(CartContext);

    let totalQuantity = 0;   // 총 수량 => 각 아이템의 수량 합산
    let totlaPrice = 0;   // 총 금액 => 각 아이템의 가격*수량 합산

    for(const item of items) {
        totalQuantity += item.quantity;
        totlaPrice += item.price * item.quantity;
    }

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART'})
    }

    return (
        <div className="cart-container">

            <div className="cart-header">
              <h2>장바구니 ({ totalQuantity })</h2>
              {/* 장바구니에 담긴 아이템이 있으면 전체 삭제 버튼 표시 */}
              {items.length > 0 && (
                <button className="cart-clear-button" onClick={handleClearCart}>
                    전체 삭제
                </button>
              )}
            </div>

            {/* case1. 장바구니가 비어있을 경우 */}
            {items.length === 0 ? (
                    <p className="cart-empty">장바구니가 비어있습니다</p>
                ) : (
                    <>
                        {/* case2. 장바구니에 아이템이 있을 경우 */}
                        <div className="cart-items">
                          {/* 장바구니 아이템(CartItem)들 배치 자리 */}
                          {
                            items.map((item) => <CartItem key={item.id} item={item}/>)
                          }
                        </div>

                        <div className="cart-summary">
                          <div className="cart-total">
                            <span>총 금액:</span>
                            <span className="cart-total-price">
                              {totlaPrice.toLocaleString()}원
                            </span>
                          </div>
                          <button className="cart-order-button">주문하기</button>
                        </div>
                    </>
                )
            }            

        </div>
    )
}

export default Cart
