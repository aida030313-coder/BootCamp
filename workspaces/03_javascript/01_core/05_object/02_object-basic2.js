/**
 * 📌 프로퍼티
 * 1. 프로퍼티 키(key)
 *   1) 프로퍼티 값에 접근하기 위한 식별자 
 *   2) 문자열이므로 따옴표 사용가능하지만 식별자 네이밍 규칙을 따르는 경우 사용안해도됨 
 *   3) 단, 식별자 네이밍 규칙을 따르지 않는 이름은 따옴표를 반드시 사용해야됨 
 * 2. 프로퍼티 값(value)
 *   1) 자바스크립트에서 취급할 수 있는 모든 값 허용
 *   2) 각 자료형에 맞는 형식대로 작성해야됨 
 *   3) 함수(function)을 프로퍼티 값으로 작성시 해당 객체의 메소드로 칭함
 * 3. 프로퍼티 접근 
 *   1) 마침표 표기법 (dot notation)
 *       → 객체.프로퍼티명
 *   2) 대괄호 표기법 (square bracket notation)
 *       → 객체['프로퍼티명']
 */


var obj = {
    normal: 'normal value',   // 2) 문자열키(객체에 추가된 순서대로)
    '@ s p a c e @' : 'space value',
    '' : '',   // 권장X
    0 : 1,   // 내부적으로 문자열로 변환   // 1) 숫자키(오름차순)
    var : 'var',   // 권장X

    normal : 'new value'   // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어쓴다.
}


var key = 'test';
// 프로퍼티 키 동적 생성
obj[key] = 'text value';

console.log(obj);


/*
  * 메소드 
  1) 객체 내에 프로퍼티로 함수를 할당시 메소드라고 함
  2) 자바스크립트에서는 함수도 하나의 값으로 취급하므로 
     프로퍼티 값으로 함수를 할당할 수 있음 
*/


var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹어요. `);
    }
};

// 마침표 표기법
console.log(dog.name);
dog.eat('고구마');

// 대괄호 표기법
console.log(dog['name']);
dog['eat']('고구마');



var obj2 = {
    'dash-key' : 'dash-value',
    0 : 1   // 내부적으로 문자열로 변환
};


// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우,
// 반드시 대괄호 표기법을 사용
// console.log(obj2.dash-key);
// console.log(obj2.'dash-key');
// console.log(obj2.[dash-key]);
console.log(obj2['dash-key']);

// console.log(obj2.0);
// console.log(obj2.'0');
console.log(obj2[0]);
console.log(obj2['0']);


/*
  * 프로퍼티 조작
  1) 프로퍼티 추가 및 수정 (새로운 프로퍼티일 경우 추가, 기존 프로퍼티일 경우 수정)
      → 객체.프로퍼티명 = 값
      → 객체['프로퍼티명'] = 값
  2) 프로퍼티 삭제
      → delete 객체.프로퍼티명
      → delete 객체['프로퍼티명']
*/


var cat = {
    name : '나비'
};

// 이미  존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다. 
cat.name = '야옹이';
cat['name'] = '야옹이';
console.log(cat);

// 프로퍼티 동적 추가
cat.age = 3;
cat['age'] = 3;
console.log(cat);

// 프로퍼티 삭제
delete cat.age;
delete cat['age'];

console.log(cat);


console.log('================================');

/*
  * 프로퍼티/값 반환 메소드 
  1) Object.keys(객체) : 객체의 모든 프로퍼티 키를 배열로 반환
  2) Object.values(객체) : 객체의 모든 프로퍼티 값을 배열로 반환
  3) Object.entries(객체) : [키, 값] 쌍의 배열로 반환
*/


console.log(Object.keys(cat));
console.log(Object.values(cat));
console.log(Object.entries(cat));


console.log('================================');

/*
  * in 연산자 
  1) 특정 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인할 수 있는 연산자
  2) 사용법
      → '프로퍼티명' in 객체 : 객체 내에 해당 프로퍼티가 존재하면 true, 존재하지 않으면 false
*/


const student = {
    name : '유관순',
    age : 16,
    test : undefined
};

console.log(student.name === undefined);   //false
console.log(student.height === undefined);   //true
console.log(student.test === undefined);   // true > 존재하지 않음으로 판별되어버림

console.log("name" in student);   //true
console.log("height" in student);   //false
console.log("test" in student);   //true


/*
  * for...in문 
  1) 객체가 가지고 있는 프로퍼티명(key)을 임의의 순서로 순차적으로 반환 
  2) 반환되는 프로퍼티명은 string 타입이기 때문에 "대괄호 표기법"으로 접근해야됨

  for(프로퍼티명(key)를 담을 변수 in 객체) {
  
  }
*/


for(const key in student) {
    console.log(`key : ${key}`);
    console.log(`value : ${student[key]}`);
}
