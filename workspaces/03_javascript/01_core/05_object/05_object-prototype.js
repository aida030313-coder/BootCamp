/**
 * 📌 프로토타입(Prototype) 
 * 1. 자바스크립트는 Prototype 기반의 객체지향 언어로 
 *    Prototype을 활용해서 객체지향프로그래밍에서의 상속을 구현할 수 있음 
 * 2. 자바스크립트 객체에는 [[Prototype]] 이라는 숨김 프로퍼티가 존재함.
 *     → 자신의 부모 역할을 하는 객체와 연결되어있음 
 *     → 프로토타입 객체의 속성과 메소드를 상속받아 사용할 수 있음 
 * 3. __proto__ 포인터를 통해 [[Prototype]]을 가져오거나 설정할 수 있음 (getter/setter) 
 */


const user = {
    active : true,
    login : function() {
        console.log('로그인 되었습니다. ');
    }
};

const student = {
    passion : true
};

// 권장X
student.__proto__ = user;
console.log(student.active);
student.login();


// 프로토타입 체인
const euljiStudent = {
    class : 'fe',
    __proto__ : student
};

console.log(euljiStudent.active);
console.log(euljiStudent.passion);


console.log('================================');

// Object.setPrototypeof(객체, 부모객체);   // __proto__를 대신하는 방식
Object.setPrototypeOf(student, user);   // 권장. 요즘방식
// Objext.getPrototypeOf(객체);
console.log(Object.getPrototypeOf(student));

for(let prop in euljiStudent) {
    let isOwn = euljiStudent.hasOwnProperty(prop);

    if(isOwn) {
        console.log(`객체 자신의 프로퍼티 ${prop}`);
    } else {
        console.log(`상속 프로퍼티 ${prop}`);
    }
};


console.log('================================');

// 생성자 함수 프로토타입
// 생성자 함수를 통해 생성된 객체 내에는 prototype이라는 속성이 자동으로 부여되어있다.


const food = {
    eat: function() {
        console.log('맛있게 먹습니다. ');
    }
};

// 생성자 함수
function Pizza(topping) {
    this.topping = topping;
}

Pizza.prototype = food;   // 생성자 함수 프로토타입

const myPizza = new Pizza('치즈');
console.log(myPizza.topping);
myPizza.eat();


console.log('================================');

// 생성자 함수에서 메소드 정의 방법 비교
function Animal(name) {
    this.name = name;

// 1. 생성자 함수내에 직접 메소드 정의하는 방법
//     this.speak = function() {
//         console.log(`${this.name}이(가) 짖습니다. `);
//     }
// };
}

// 2. 생성자 함수의 prototype 활용하여 메소드 정의하는 방법(권장)
Animal.prototype.speak = function() {
    console.log(`${this.name}가 짖습니다. `);
};

const dog = new Animal('멍멍');
const cat = new Animal('야옹');
dog.speak();
cat.speak();


/*
  1. 메모리 효율성 
    - 생성자 함수 내의 정의 : 인스턴스 마다 독립적인 메소드 복사본이 생성됨
                                => 인스턴스가 많아질 수록 메모리 사용량이 증가됨 
    - prototype에 정의 : 모든 인스턴스가 동일한 메소드를 공유함

  2. 동적 업데이트 가능성 
    - 생성자 함수 내의 정의 : 각 인스턴스마다 메소드를 일일히 수정해야됨 
    - prototype에 정의 : prototype의 메소드만 수정하면 인스턴스에 즉각 반영됨 
*/