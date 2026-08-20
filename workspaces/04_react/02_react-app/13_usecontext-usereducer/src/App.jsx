import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useReducer, createContext } from 'react';
import { cartReducer, initialState } from './reducers/cartReducer';

export const CartContext = createContext();

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <CartContext.Provider value={{ items: state.items, dispatch}}>
        <div className='app-container'>
          {/* 상품 목록 컴포넌트 */}
          <ProductList/>
          {/* 장바구니 컴포넌트 */}
          <Cart/>
        </div>
      </CartContext.Provider>
      
    </>
  )
}

export default App
