export {}


/*
  📌 Call Signature (함수 타입 선언 구문)
  1. 함수 타입을 정의할 때 매개변수와 반환값의 타입을 명시적으로 지정하는 방법
  2. 작성법
     (매개변수: 타입) => 반환값 타입;
  3. 재사용을 위해 타입별칭 사용하는 것이 좋음 
*/

// 두 수를 전달받아서 결과값(숫자)을 반환하는 덧셈, 뺄셈, 곱셈, 나눗셈 함수 정의
// const sum = (x: number, y: number): number => x + y;

// const sum: 함수 객체의 타입 = 함수 정의;
const sum: (a: number, b: number) => number = (x, y) => x + y;

type Operation = (a: number, b: number) => number

const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;

console.log(multiply(3, 11));

// const divide: Operation = (a, b, c) => a / b;   // 매개변수 개수가 불일치하여 불가
const divide: Operation = (a) => a / 10;   // 매개변수의 개수가 더 적은건 가능
console.log(divide(120, 20));              // 단, Operation 타입에 맞춰서 매개변수의 인자값 전달해야됨