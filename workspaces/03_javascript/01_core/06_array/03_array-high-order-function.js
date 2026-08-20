/**
 * Array 고차 함수 메소드 (콜백 함수를 인자로 받는 메소드)
 
 1. Array.prototype.forEach : 배열 요소를 순회하며 콜백 함수를 실행
                              반환값은 없으며 주로 반복 작업에 사용
   배열.forEach(function(item, index, array)) {
        배열 요소 각각에 실행할 기능 작성
   };
*/


var arr = [1, 2, 3, 4, 5];
arr.forEach(function(item, index, array) {
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
});

arr.forEach(item => console.log(item * 10));


console.log('================================')

/**
 2. Array.prototype.map : 배열 요소 전체를 대상으로 콜백 함수 호출 후
                          반환 값들로 구성 된 새로운 배열 반환
   배열.map(function(item, index, array)) {
        배열 요소 각각에 반환할 새로운 값
   };
 */

const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);

const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item =>item.length);
console.log(`lengths : ${lengths}`);

  
console.log('================================')

/**
 3. Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후
                             반환 값이 true인 요소들로만 구성 된 새로운 배열 반환
   배열.filter(function(item, index, array)) {
        조건을 만족하는 요소만 true 반환
   };
 */

const all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = all.filter(item => item % 2);   // 짝수는 falsy 값이 됨
console.log(odds);


console.log('================================')

/**
 4. Array.prototype.some : 배열 요소를 순회하며 콜백 함수를 실행하고
                           하나라도 조건을 만족하면 true, 모두 만족하지 않으면 false 반환
   배열.some(function(item, index, array)) {
        각 요소가 조건을 만족하는지 검사
   };
 */

const result1 = [1, 5, 3, 2, 4].some(item => item > 10);
console.log(`result1 : ${result1}`);

const result2 = [1, 5, 3, 2, 4].some(item => item > 3);
console.log(`result2 : ${result2}`);

  
console.log('================================')

/**
 5. Array.prototype.every : 배열 요소를 순회하며 콜백 함수를 실행하고
                            모든 요소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false 반환
   배열.every(function(item, index, array)) {
        각 요소가 조건을 만족하는지 검사
   };
 */


const result3 = [1, 5, 3, 2, 4].every(item => item > 0);
console.log(`result3 : ${result3}`);


/**
 6. Array.prototype.find : 배열 요소를 순회하며 콜백 함수를 실행하고
                           조건을 만족하는 첫 번째 요소를 반환
                           만족하는 요소가 없으면 undefined 반환
   배열.find(function(item, index, array)) {
        조건을 만족하는 요소 찾기
   };
 */

const students = [
    {name : '유관순', score: 90},
    {name : '장보고', score: 80},
    {name : '홍길동', score: 70}
];

const result4 = students.find(item => item.name === '유관순');   // find: 요소 반환
console.log(result4);

const result8 = students.find(item => item.score >= 80);   // find: 요소 반환
console.log(result8);   // 조건에 만족하는 첫 번째 요소 반환

const result5 = students.find(item => item.name === '심사임당');
//  존재하지 않음으로 undefined
console.log(result5);


/**
 7. Array.prototype.findIndex : 배열 요소를 순회하며 콜백 함수를 실행하고
                                조건을 만족하는 첫 번째 요소의 인덱스를 반환
                                만족하는 요소가 없으면 -1 반환
   배열.findIndex(function(item, index, array)) {
        조건을 만족하는 요소의 인덱스 찾기
   };
 */

const result6 = students.findIndex(item => item.name === '유관순');   // findIndex: 요소의 인덱스 반환
console.log(result6);

const result7 = students.findIndex(item => item.name === '심사임당');   // 만족하는 요소가 없으면 -1 반환
console.log(result7)
