// 참조 타입: object, array, tuple, function

export {} 

/*
  📌 객체 타입 
  1. 자바스크립트의 객체(원시값 제외)를 표현하는 타입
  2. 종류
    1) object : 타입 단순 지정
    2) {속성: 타입, ..} : 객체 리터럴 타입 지정
*/

let obj1: object;
obj1 = { name: '홍길동'};
obj1 = [1, 2, 3];
obj1 = () => console.log('hi');
// obj1 = 42;

let obj2: {name: string, age: number};
obj2 = {name: '홍길동', age: 20};
// obj2 = {}

/*
  📌 배열 타입 (Array Types)
  1. 자바스크립트의 배열을 표현하는 타입
  2. 종류
    1) [] : 타입 단순 지정
    2) Array<타입> :제네릭 타입 Array<> 사용
*/

let nums1: number[] = [1, 2, 3];
let strs1: string[] = ['hello', 'world'];

console.log(typeof nums1);

let nums2: Array<number> = [1, 2, 3];
let strs2: Array<string> = ['hello', 'world'];

// 객체 배열
let users: {name: string, age: number}[];
users = [
    {name: '홍길동', age: 20},
    {name: '김길동', age: 25}
];

// 번외) 다차원 배열
let arr: number[][];
arr = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8]
];

/*
  📌 튜플 타입 (Tuple Types)
  1. 고정 길이, 각 요소마다의 타입을 지정 할 때 사용
  2. 작성법
    [타입, 타입, ..]
  3. 유의사항
    튜플 타입 지정 시 각 요소의 순서와 타입이 중요
*/

let tuple1: [number, string, boolean] = [123, 'hello', false];
let tuple2: [number, string] = [123, 'hello'];


/*
    [true, 'hello', 1]
    [false, 'bye', 1, 2]
    [true, 'hi', 1, 2, 3]
    [false, 'great', 1, 2, 3, 숫자들 ...]
    [false, 'great', 1, 2, 3, 여러타입...]

    이 모든 값을 허용할 수 있는 타입은?
*/

let tuple3: [boolean, string, ...number[]] = [true, 'hi', 1, 2, 3]
let tuple4: [boolean, string, ...unknown[]] = [true, 'hi', 1, 2, 3, 'zzz']