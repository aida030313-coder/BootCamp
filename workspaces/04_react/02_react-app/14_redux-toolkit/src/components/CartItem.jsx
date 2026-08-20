import { useDispatch } from 'react-redux'
import './CartItem.css'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../store/cartSlice'

// <CartItem item={장바구니 아이템 객체}/>
function CartItem({item}) {   // item === {id: xx, name: xx, price: xx, quantity: xx}

    const dispatch = useDispatch();   // 액션을 전달할 수 있는 dispatch용 함수 반환
    
    const handleItemRemove = () => {
        // dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
        dispatch(removeFromCart(item.id))
    }
    
    const handleItemQuantityIncrease = () => {
        // dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })
        dispatch(increaseQuantity(item.id))
    }
    
    const handleItemQuantityDecrease = () => {
        // dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })
        dispatch(decreaseQuantity(item.id))
    }

    return (
        <div className="cart-item">
	        <div className="cart-item-info">
	          <h4>{item.name}</h4>
	          <p className="cart-item-price">{item.price.toLocaleString() }원</p>
	        </div>

	        <div className="cart-item-controls">
	          <button className="cart-item-quantity-button" onClick={handleItemQuantityDecrease}>
	            -
	          </button>
	          <span className="cart-item-quantity">{item.quantity}</span>
	          <button className="cart-item-quantity-button" onClick={handleItemQuantityIncrease}>
	            +
	          </button>

	          <button className="cart-item-remove-button" onClick={handleItemRemove}>
	            삭제
	          </button>
	        </div>
        </div>
    )
}

export default CartItem
