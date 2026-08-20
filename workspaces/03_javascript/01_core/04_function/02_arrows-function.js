/**
 * 📌 화살표 함수 
 * 1. arrow function
 * 2. 람다 함수라고도 표현 
 * 3. ES6에 도입된 문법 
 * 4. function 키워드 대신에 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있음 
 *     → 가독성을 높이고 간단한게 표현 가능 
 *     → 본문이 한 줄인 함수 작성시 유용
 * 5. 익명함수만 화살표함수로 정의할 수 있음 
 * 6. 단, 화살표함수에서는 arguments를 지원하지 않음 
 * 7. 작성법 : () => { 실행내용 }
 *   1) (): 매개변수 작성란
 *   2) {}: 함수내의 코드 작성란 
 * 8. 특징
 *   1) 단일 매개변수일 경우 소괄호() 생략 가능
 *   2) 단일 실행문일 경우 중괄호{} 생략 가능
 *   3) 별도의 실행내용 없이 결과값만 존재할 경우 return 생략 가능 
 */


var message;   // var: message 변수 선언

// 기존 함수 정의
message = function() {
    return 'hello world';
}

console.log(message());


// function 생략 가능
message = () => {
    return 'arrow function';
}

// 명령문이 하나만 있을 경우 중괄호, return 생략 가능
message = () => 'arrow function';



// 매개변수가 있는 경우
message = (val1, val2) => `arrow function : ${val1 + val2}`;

console.log(message(10, 20));

// 매개변수가 하나면 소괄호 생략 가능
message = value => `hello${value}`;

console.log(message('world'));