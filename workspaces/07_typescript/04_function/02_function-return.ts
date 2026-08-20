export {}

// 1) 반환값이 있을 경우
function getMessage(name: string) {
    return `hello, ${name}`;
}
console.log(getMessage('홍길동'));

function getUser(id: number | string): {id: number | string, name: string} {
    return {id, name: '홍길동'};
}
console.log(getUser(1));
console.log(getUser('1'));

interface Product {
    id: number
    name: string
    price: Number
}

// 반환 타입에 인터페이스 정의
function getProducts(): Product[] {
    return [
        {id: 1, name: "mouse", price: 20000},
        {id: 2, name: "rabbit", price: 30000}
    ]
}
console.log(getProducts());

// 번외) 반환 타입 추론
function getSum(a: number, b: number) {
    return a + b;
}   // 반환 타입을 쓰지 않았는데도 타입스크립트가 자동으로 추론할 수 있지만,
    // 안정성의 측면에서 명시하는 것을 권장한다.
getSum(1, 2)

/*
  📌 void 타입
  1. 함수에서 반환값이 없을 때 사용 
  2. 함수 실행은 끝났지만 유용한 값을 반환하지 않을 경우 사용
  3. 보통 함수의 결과물이 없거나 단순히 부수효과(side effect)를 위해 사용 
  4. 변수에는 거의 사용하지 않고, 함수 반환 타입으로 주로 사용
     → 변수 타입으로 사용하면 undefined만 할당 가능 
*/

function printMessage(msg: string): void {
    console.log(msg);
    // return; 생략
}


/*
  📌 never 타입
  1. 함수에서 절대 값을 반환하지 않을 때 사용
     즉, 함수의 실행이 "절대로 정상적으로 종료(반환)" 되지 않는 경우 사용 
  2. 함수가 영원히 끝나지 않는 무한루프가 돌거나 항상 예외를 던지는 경우 주로 사용
  3. 변수 타입으로는 사용하지 않음
     → 변수 타입으로 사용하면 어떤 값도 할당 불가 (undefined 포함)
*/

// 항상 예외를 던지는 함수
function throwCustomError(msg: string): never {
    throw new Error(msg);
}
// throwCustomError('에러발생');