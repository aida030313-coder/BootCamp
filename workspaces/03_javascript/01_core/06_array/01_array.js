 /**
  * 📌 Array
  * 1. 다수의 데이터를 순서대로 저장하고, 각 데이터에 인덱스를 통해 접근할 수 있는 
  *    선형 자료구조(Linear Data Structure)
  * 2. 다양한 타입의 데이터를 한 배열에 저장할 수 있으며, 크기가 동적으로 변함 
  * 3. 용어 
  *   1) 요소(element) : 배열에 저장된 각 데이터
  *   2) 인덱스(index) : 요소의 위치를 나타내는 숫자 (0부터 시작)
  *   3) 배열의 길이(length) : 배열에 포함된 요소의 개수
  * 4. 배열 생성 방식
  *   1) 배열 리터럴 
  *       → 변수 = [];
  *       → 변수 = [element, element, ..];
  *   2) Array 생성자 함수
  *       → 변수 = new Array([크기]);
  *       → 변수 = new Array(element, element, ..);
  *   3) Array.of 메소드
  *       → 변수 = Array.of(element, element, ..);
  * 5. 배열 요소 접근 방식
  *     → 배열[index]
  * 6. 각 요소들은 쉼표(comma)로 구분하며, 후행쉼표(trailing comma)를 사용할 수 있음
  */


 // 1. 배열 리터럴을 통해 배열 생성
 const arr1 = ['바나나', '복숭아'];
 console.log(arr1);
 console.table(arr1);

 console.log(typeof arr1);   // object 객체타입

 console.log('================================');

 // 2. 배열 생성자 함수
 const arr2 = new Array();
 console.log(arr2);

 // 전달된 인수가 1개이고 숫자인 경우
 // length 프로퍼티 값이 인수인 배열이 생성된다.
 const arr3 = new Array(10);   // ()안에 숫자를 하나만 넣으면 그것은 배열의 길이
 console.log(arr3);   // Array안에 빈 방 갯수 10개


 console.log('================================');

 // 전달된 인수가 2개 이상
 const arr4 = new Array(1, 2, 3, 'a');
 console.log(arr4);


 console.log('================================');

 // 3. Array.of 메소드
 const arr5 = Array.of(1, 2, 'hello', 'js');
 console.log(arr5);

 console.log(arr5.length);
 console.log([].length);   // []공백의 길이를 물어봤으므로 undefined

 console.log(arr5[2]);
 console.log(arr5[10]);   // 10번 인덱스 값은 존재하지 않기 때문에 undefined


 console.log('================================');

/*
  * 배열과 for문 
  1) for in 문 (인덱스를 가져옴)
      → 배열의 인덱스를 순차적으로 가져옴
      → 형식
          for(인덱스 in 배열) {
            본문
          }
  2) for of 문 (요소를 가져옴)
      → 배열의 요소를 순차적으로 가져옴
      → 형식
          for(요소 of 배열) {
            본문
          }
*/


const fruits = ['apple', 'banana', 'peach'];

for(let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

for(let index in fruits) {
    console.log(index, fruits[index]);
}

const cities = ['seoul', 'roma', 'newyork', 'sidney', 'vancouver'];
for(let city of cities) {
    console.log(city);
}


console.log('================================')

/*
  * 배열에서의 구조 분해 할당 
  1) 배열의 요소를 해체하여 그 값을 개별 변수에 담을 수 있게 함
  2) 사용 예시
      → 배열의 각 요소를 순서대로 변수에 할당 
         const [a, b, c] = [1, 2, 3];
         // a = 1, b = 2, c = 3
      → 일부 요소만 할당하거나, 필요 없는 값은 쉼표로 건너뜀
         let [a, , c] = [1, 2, 3]
         // a = 1, c = 3
      → ...rest 문법(나머지 문법)을 이용해 필요한 변수만 할당 가능
         let [a, ...rest] = [1, 2, 3]
         // a = 1, rest = [2, 3]
*/


const [fruit1, fruit2, fruit3] = fruits;   // 위에서 만든 fruits 받아옴
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const [fruit4, , fruit5] = fruits;
console.log(fruit4);
console.log(fruit5);

const [city1, ...cityRest] = cities;
console.log(city1);
console.log(cityRest);   // city1을 제외한 나머지
console.log(cities);