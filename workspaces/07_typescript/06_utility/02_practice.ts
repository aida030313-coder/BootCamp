// 상품관리 실습 

// 아래의 모든 실습의 기본 데이터가 될 Product 인터페이스 
interface Product {
  readonly id: number;   // (읽기 전용) 상품 ID
  name: string;          // 상품명
  price: number;         // 가격
  description: string;   // 상세 설명
  category: string;      // 카테고리
  stock: number | null;  // 재고(없을 수도 있음)
  internalSecretCode: string; // (내부용) API에서는 이 키를 제외하고 보내야 합니다.
}


// -----------------------------------------------------------------
// 미션1: 상품 정보 '부분' 수정 
// 
// Product의 모든 속성을 '선택적(optional)'으로 갖는
// UpdateProductDto 타입을 만들어보세요.
// (참고. DTO = Data Transfer Object, 데이터 전송 객체)
// -----------------------------------------------------------------

// 풀기 1: 여기에 타입을 정의해 보세요
type UpdateProductDto = Partial<Product>;

// 테스트코드 1: UpdateProductDto 타입의 객체를 받아서 상품을 수정하는 함수 
function updateProduct(id: number, changes: UpdateProductDto) {
  console.log(`Updating product ${id} with:`, changes);
}

// ✅ 통과되어야 하는 코드
updateProduct(1, { name: "새로운 노트북" });
updateProduct(2, { price: 150000, description: "더 좋아졌어요" });
updateProduct(3, { stock: 100 });

// ❌ 에러가 나야 하는 코드
// updateProduct(4, { price: "10000" }); 


// -----------------------------------------------------------------
// 미션 2: 상품 '미리보기' 카드
// 
// Product 타입에서 'name'과 'price' 속성만 '골라내어'
// ProductPreview 타입을 만드세요.
// -----------------------------------------------------------------

// 풀기 2: 여기에 타입을 정의해 보세요
type ProductPreview = Pick<Product, 'name' | 'price'>;

// 테스트코드 2
// ✅ 통과되어야 하는 코드
const previewData: ProductPreview = {
  name: "게이밍 마우스",
  price: 49000,
};

// ❌ 에러가 나야 하는 코드
// const previewError1: ProductPreview = { 
//   name: "키보드",
// };
// const previewError2: ProductPreview = {
//   name: "모니터",
//   price: 250000,
//   description: "FHD 모니터",
// };


// -----------------------------------------------------------------
// 미션 3: '보안 정보' 제외하고 보내기
// 
// Product 타입에서 'internalSecretCode' 속성만 '제외하고'
// PublicProduct 타입을 만드세요.
// -----------------------------------------------------------------

// 풀기 3: 여기에 타입을 정의해 보세요 
type PublicProduct = Omit<Product, 'internalSecretCode'>;

// 테스트코드 3
// ✅ 통과되어야 하는 코드
const apiResponse: PublicProduct = {
  id: 1,
  name: "스마트폰",
  price: 800000,
  description: "최신형 스마트폰",
  category: "electronics",
  stock: 50,
};

// ❌ 에러가 나야 하는 코드
// const apiResponseError: PublicProduct = {
//   id: 2,
//   name: "노트북",
//   price: 1800000,
//   description: "최신형 노트북",
//   category: "electronics",
//   stock: 100,
//   internalSecretCode: "SECRET_VALUE" 
// };


// -----------------------------------------------------------------
// 미션 4: 컴포넌트 props 불변성 지키기
// 
// Product의 모든 속성을 '읽기 전용'으로 만드는
// ReadonlyProductProps 타입을 정의하세요.
// -----------------------------------------------------------------

// 풀기 4: 여기에 타입을 정의해 보세요 
type ReadonlyProductProps = Readonly<Product>;

// 테스트코드 4: 해당 컴포넌트는 Product객체를 전달받되 컴포넌트 내에서 해당 전달된 객체의 속성이 변경되서는 안됩니다. 
function ProductCard(props: ReadonlyProductProps) {
  console.log(props.name);

  // ❌ 아래 코드는 모두 에러가 나야 합니다. (props 수정 시도)
//  props.name = "수정된 이름";    // Error!
//  props.price = 9999;            // Error!
//  props.id = 123;                // Error! (기존에도 readonly였지만 다시 확인)
}

// 테스트진행 
const product: Product = { 
  id: 1,
  name: "스마트폰",
  price: 800000,
  description: "최신형 스마트폰",
  category: "electronics",
  stock: 50, 
  internalSecretCode: "SECRET_VALUE" 
};
ProductCard(product); 


// -----------------------------------------------------------------
// 미션 5: 상품 '재고' 관리 객체
// 
// 상품의 'id'(number)를 Key로, '재고량'(number | null)을 Value로 갖는
// 'ProductInventory' 타입을 만드세요.
// -----------------------------------------------------------------

// 풀기 5: 여기에 타입을 정의해 보세요 
type ProductInventory = Record<Product['id'], Product['stock']>;

// 테스트코드 5
// ✅ 통과되어야 하는 코드
const inventory: ProductInventory = {
  1: 150,  // 1번 상품 재고 150개
  2: 0,    // 2번 상품 재고 0개
  3: null, // 3번 상품 재고 관리 안 함
};

// ❌ 에러가 나야 하는 코드
// const inventoryError: ProductInventory = {
//   1: 100,
//   2: "품절"
// };



// -----------------------------------------------------------------
// 미션 6: 상품이 아닌 '주문 상태' 관리 타입
// 
// 하단의 전체 주문 상태(OrderStatus)에서 '활성 상태'와 '종료 상태'를
// 분리해서 각 타입을 정의하세요.
// -----------------------------------------------------------------

// 전체 주문 상태 
type OrderStatus =
  | "PENDING"     // 주문 대기 (활성)
  | "SHIPPING"    // 배송 중   (활성)
  | "DELIVERED"   // 배송 완료 (종료)
  | "CANCELLED"   // 주문 취소 (종료)
  | "FAILED";     // 결제 실패 (종료)


// 풀기 6_1: 활성 상태에 대한 타입을 작성해보세요. 
type ActiveStatus = Extract<OrderStatus, "PENDING" | "SHIPPING">;

// 테스트코드 6_1
let status1: ActiveStatus = "PENDING"; // ✅ 통과되어야 하는 코드
status1 = "SHIPPING";                  // ✅ 통과되어야 하는 코드
// status1 = "CANCELLED";                 // ❌ 에러가 나야 하는 코드


// 풀기 6_1: 종료 상태에 대한 타입을 작성해보세요. 
type FinishStatus = Exclude<OrderStatus, "PENDING" | "SHIPPING">;

// 테스트코드 6_1
let status2: FinishStatus = "CANCELLED"; // ✅ 통과되어야 하는 코드
status2= "FAILED";                       // ✅ 통과되어야 하는 코드
// status2= "PENDING";                      // ❌ 에러가 나야 하는 코드
