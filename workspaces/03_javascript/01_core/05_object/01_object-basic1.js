/**
 * 📌 Object
 * 1. JavaScript 데이터 유형 중 하나
 * 2. 데이터와 함수(메소드)를 하나로 묶어 관리할 수 있는 자료구조
 * 3. 데이터가 저장되는 순서는 관리하지 않음
 * 4. 객체를 구성하는 하나의 데이터는 속성(property): 값(value) 조합으로 구성됨
 *   1) 속성(property, 프로퍼티): 문자열 또는 심볼
 *   2) 값(value): 문자열, 숫자, boolean, 배열, 다른 객체, 함수 등 모든 타입 가능
 * 5. 각 데이터들은 쉼표(comma)로 구분하며, trailing comma(후행 쉼표)를 사용할 수 있음
 * 6. 객체 생성 방법
 *   1) 객체 리터럴  => 메이저 방식
 *   2) Object 생성자 함수
 *   3) 생성자 함수
 *   4) Class(ES6)
 */


// 1) 객체 리터럴 ({})
let person = {
    name: '홍길동',
    age: 20,
    hobbies: [
        "게임",
        "여행"
    ],
    home: {
        city: '서울',
        address: '강남구'
    },
    // 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작
    getInfo: function() {
        return `${this.name}은(는) ${this.age}세 입니다. `;
    }
};

console.log(person.getInfo());

console.log(person);
console.log(typeof person);
console.table(person);


// 프로퍼티를 정의하지 않을 시 빈 객체가 생성된다.
let person2 = {};
console.log(typeof person2);
console.log(person2);