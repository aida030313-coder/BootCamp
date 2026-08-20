// 기존에 배웠던 객체 생성 방법 1. 객체 리터럴
const person1 = {
    name: '홍길동',
    age: 20,
    getInfo : function() {
        return `${this.name}은 ${this.age}세입니다.`;
    }
}

console.group(person1);
console.group(person1.getInfo());


// 기존에 배웠던 객체 생성 방법 2. 생성자 함수
function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}은 ${this.age}세입니다.`;
    }
}

const person2 = new Person2('김말똥', 30);
console.log(person2);
console.log(person2.getInfo());

class Person3 {
    // 생성자 정의
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `${this.name}은 ${this.age}세입니다.`;
    }
}

const person3 = new Person3('이순신', 40);  // 생성자 함수 호출
console.log(person3);
console.log(person3.getInfo());

// class 방식 상속
class Student extends Person3 {
    // Student가 Person3에게서 상속받음
    constructor(name, age, dream){
        super(name, age);   // 부모 객체로 전달
        this.dream = dream;
    }
    study() {
        return `${this.name}은 ${this.dream}을 위해 공부중입니다.`;
    }
}

const student = new Student('홍길동', 20, '리액트 개발자');
console.log(student);
console.log(student.getInfo());
console.log(student.study());