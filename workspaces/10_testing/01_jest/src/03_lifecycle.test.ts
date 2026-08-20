import { addToCart, calculateCartTotal, clearCartFromLocalStorage, getCartFromLocalStorage, getCartItemCount, Product, removeFromCart } from "./03_lifecycle";

// localStorage (Node.js 환경에서는 존재하지 않음) => Mock 객체 생성 
const localStorageMock = (() => {
  let store: {[key: string]: string} = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => store[key] = value,
    removeItem: (key: string) => delete store[key],
    clear: () => store = {}
  }
})();

// Node.js 전역 객체(global)에 Mock localStorage를 등록
global.localStorage = localStorageMock as any;

describe('장바구니 기능 테스트', () => {

    const testProduct1: Product = {
        id: 1,
        name: '노트북',
        price: 1000000,
        imageUrl: '/images/laptop.jpg'
    }
    const testProduct2: Product = {
        id: 2,
        name: '마우스',
        price: 30000,
        imageUrl: '/images/mouse.jpg'
    }

    // 테스트끼리 서로 영향을 주지 않게 하기 위해서,
    // 테스트간의 의존성을 제거하고 독립성을 보장한다.
    beforeEach(() => {
        localStorage.clear();
    })
    afterEach(() => {
        localStorage.clear();
    })

    test('장바구니에 상품 추가 테스트', () => {
        const cart = addToCart(testProduct1, 1);

        // 검증
        expect(cart).toHaveLength(1);
        expect(cart[0].productName).toBe('노트북');
        expect(cart[0].quantity).toBe(1);
    })

    test('장바구니에 같은 상품 추가 시 수량만 증가되는지 테스트', () => {
        addToCart(testProduct1, 1);

        const cart = addToCart(testProduct1, 2);

        expect(cart).toHaveLength(1);
        expect(cart[0].quantity).toBe(3);
    })

    test('장바구니 총 금액, 총 수량 계산 테스트', () => {
        addToCart(testProduct1, 1);   // 1,000,000
        addToCart(testProduct2, 2);   // 60,000

        const total = calculateCartTotal();
        const count = getCartItemCount();

        expect(total).toBe(1060000);
        expect(count).toBe(3);
    })

    test('장바구니에서 상품 제거 테스트', () => {
        addToCart(testProduct1);
        addToCart(testProduct2);

        removeFromCart(1);   // [{productId: 2}]

        const cart = removeFromCart(1);

        expect(cart).toHaveLength(1);
        expect(cart[0].productName).toBe('마우스');
    })

    test('장바구니 초기화 테스트', () => {
        addToCart(testProduct1);
        addToCart(testProduct2);

        clearCartFromLocalStorage();

        const cart = getCartFromLocalStorage();
        expect(cart).toHaveLength(0);
    })
})