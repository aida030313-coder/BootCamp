// 배열 구조 분해 할당
const fruits = ["apple", "banana", "kiwi"];

// 구조 분해 할당 X
// const a = fruits[0];
// const b = fruits[1];
// const c = fruits[2];

// 구조 분해 할당
const [a, b, c] = fruits;
console.log(a, b, c);

// 문자열 -> 배열로 쪼개고 구조 분해 할당
const [firstName, lastName] = "Saimdang Shin".split(' ');
console.log(firstName);
console.log(lastName);

// 일부 요소를 생략하고 싶은 경우
const [first, , last] = ['first', 'middle', 'last'];
console.log(first);
console.log(last);

// 나머지 연산자 활용
const [sign1, sign2, ...rest] = ["사자자리", "염소자리", "천칭자리", "처녀자리", "쌍둥이자리"];
console.log(sign1);
console.log(sign2);
console.log(rest);

console.log("===========================");

// 객체 구조 분해 할당
const pants = {
    productName: "바지",
    color: "검은색",
    price: 30000
};

const { productName, color, price } = pants;

// 각 변수의 서술 순서는 무관하며, {객체 프로퍼티: 목표 변수} 형식으로도 작성할 수 있다.
const { color: co, price: pr, productName: pn } = pants;
console.log(co);
console.log(pr);
console.log(pn);