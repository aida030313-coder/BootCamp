import { useDispatch } from 'react-redux'
import './ProductItem.css'
import { addToCart } from '../store/cartSlice'

// <ProductItem product={상품객체}/>
function ProductItem({ product }) {   // product === {id: xx, name: xx, price: xx, description: xx}

    const dispatch = useDispatch();   // 액션을 전달할 수 있는 dispatch용 함수 반환

    const handleAddToCart = () => {
        // dispatch({
        //     type: 'ADD_TO_CART',
        //     payload: {
        //         id: product.id,
        //         name: product.name,
        //         price: product.price
        //     }
        // })

        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price
        }))
    }

    return (
        <div className="product-item">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price.toLocaleString()}원</p>
            <button className="product-add-button"
                onClick={handleAddToCart}>
                장바구니에 추가
            </button>
        </div>
    )
}

export default ProductItem
