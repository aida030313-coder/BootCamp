
/*
  * 프로퍼티 값 단축 구문 
  1) ES6에서는 특정 변수를 객체의 프로퍼티로 바로 정의할 수 있음
  2) 단, 프로퍼티명(키)은 변수 이름으로 부여됨 
*/


let id = 'p-0001'
let price = 30000;

let product1 = {
    id : id,
    price : price
};

console.log(product1);


// 프로퍼티 값 단축 구문
// 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.
// 프로퍼티 키는 변수 이름으로 자동 생성된다.

let product2 = {id, price};

console.log(product2);


/*
  * 구조 분해 할당 
  1) Destructuring Assignment
  2) 객체의 각 프로퍼티를 해체하여 그 값을 개별 변수에 담을 수 있게 하는 문법 
  3) 단, 변수명을 객체의 프로퍼티명과 동일하게 맞춰야됨 (순서는 상관 없음)
  4) 형식
     {변수1, 변수2, ..} = 객체;
*/


const project = {
    title: '포트폴리오',
    stack: 'react',
    deploy: 'verce1'
};

// const title = project.title;
// const stack = project.stack;
const {stack, title} = project;
// project안에서 stack, title을 따로 꺼내쓸 수 있도록 하기 위해서

console.log(stack);
console.log(project);
// console.log(deploy);   // project안에서 꺼내지지 않았기 때문에 오류


/*
  * 메소드 단축 
  ES6에서는 객체 내의 메소드 정의시 function 키워드를 생략한 축약 표현을 사용할 수 있음
*/


var dog = {
    name : '뽀삐',
    eat(food) {   // ES5 -> eat : function(food) {...}
        console.log(`${this.name}는 ${food}를 맛있게 먹어요. `);
    }
};

dog.eat('간식');
console.log(dog);