/**
 * 📌 함수 
 * 1. 함수는 특정 작업을 수행하는 코드의 집합(블럭)
 * 2. 인자를 받아서 특정 작업을 실행하고 결과를 반환 할 수 있음 
 * 
 *               인자(input)
 *                    ↓
 *         ┌──────┘       └──────────┐
 *         │      함수(function)      │
 *         └────────────┐       ┌────┘
 *                           ↓
 *                      결과(output)
 *       
 * 3. 자신만의 실행 범위 (scope)를 가짐 
 * 4. 코드 재사용성을 높이고 프로그램을 구조화하여 유지보수에 용이함
 * 5. 함수 정의와 작동 방식
 *   1) 인자값을 받을 수 있는 매개변수와 실행 코드를 중괄호 블럭에 작성하여 정의한다.
 *   2) 함수는 호출(call)되어야만 내부 코드가 실행된다. 
 *   3) 함수는 실행 중 return문으로 결과값을 반환할 수 있다. 
 *      (반환값이 없을 경우 기본적으로 undefined가 반환된다.)
 * 6. 함수의 장점 
 *   1) 코드 중복 방지 : 반복되는 코드를 함수로 정의하여 여러번 호출 가능 
 *   2) 코드 구조화    : 기능별 함수를 분리하여 가독성 향상 
 *   3) 유지보수 용이  : 각 함수별로 수정 가능  
*/


/**
 * 📌 함수 선언식 (function declaration)
 * 1. 함수 이름을 결정해서 함수를 정의하는 방식 (기명함수)
 * 2. 단, 동일한 이름의 함수 정의시 마지막에 정의한 함수만 존재함 
 * 3. 작성법
 *     function 함수명([매개변수]){
 *       실행구문
 *       [return 결과;]
 *     }
 * 4. 호출법
 *     함수명([인자값]);
 * 
 * ‼️ 참고사항 
 * - 함수 선언식은 "호이스팅" 특성을 가지고 있음 
 *    → 함수 선언문 이전에 함수를 참조할 수 있고 호출할 수 있음 
 */


hello('김길동');
function hello(name) {   // function 호이스팅 가능
  console.log(`${name}님 환영합니다. `);
}

hello('홍길동');
hello();   // undefined

 
/**
 * 📌 함수 표현식 (function expression)
 * 1. 함수를 변수에 저장하는 방식 
 * 2. 주로 익명함수를 변수에 저장하는 용도로 사용 (기명함수도 대입 가능하긴 함)
 * 3. 작성법
 *     const 변수명 = function([매개변수]) {
 *       실행구문
 *       [return 결과;]
 *     };
 * 4. 호출법
 *     변수명([인자값]);
 * 
 *‼️ 참고사항 
 * 자바스크립트에서는 함수는 일급객체(first-class object)로 취급됨 
 *  → 함수를 다른 일반적인 값들처럼 변수에 저장할 수 있고, 
 *    매개변수로 전달할 수 있고, 반환값으로 사용할 수도 있음 
 *  → 즉, 함수가 단순히 호출되는 기능을 넘어 하나의 "값"으로 다뤄질 수 있음을 의미 
 * 
 * * 일급객체의 특징 
 * 1) 무명의 리터럴로 생성할 수 있다. 
 * 2) 변수나 자료구조(객체, 배열 등)에 저장할 수 있다. 
 * 3) 함수의 매개변수에 전달할 수 있다. 
 * 4) 함수의 반환값으로 사용할 수 있다. 
 */


// hi('신길동');
 const hi = function (name) {   // 함수의 이름을 지정하지 않아도 ㄱㅊ
  console.log(`${name}님 안녕하세요! `);
 }

 hi('이길동');   // const 호이스팅 불가능


 const calc = function add(a, b) {
  return a + b;
 }

 console.log(calc(10, 20));
//  console.log(add(10, 20));
 

/**
 * 📌 매개변수와 인자(전달값)
 * 1. 함수 호출시 전달되는 인자값(argument)을 받아주기 위한 변수 
 * 2. 매개변수 선언시 선언 키워드(var, let, const)는 사용하지 않음
 * 3. 나머지(rest) 매개변수 또는 arguments 배열을 이용해 0개 이상의 인자를 처리할 수 있음
 * 4. 인자가 전달되지 않는 경우에 사용할 디폴트값을 지정할 수 있음 
 */
 

function parameterTest(param) {
  console.log(param);   // parameter 함수 내부에서만 참조 가능한 매개변수
}

// console.log(param);   // 불가능


parameterTest('hello');
parameterTest(10);
parameterTest('a', 'b', 'c');   // 더 많은 인자 전달 시 초과되는 값은 무시됨
parameterTest();   // undefined


/*
  * arguments
  1) 함수 내에서 암묵적으로 하나씩 존재하는 객체 
  2) 인자값이 해당 객체의 프로퍼티로 보관됨 
*/

/*
  * 나머지 매개변수 (rest parameter)
  1) 함수의 매개변수 목록 끝에 작성하며, 여러 인자값들을 하나의 배열로 묶어줌 
  2) 함수 내부에서는 배열로 다뤄짐  
  3) ES6 이후 도입된 문법 
  4) 작성법
      function 함수명([매개변수], ...rest매개변수){
        실행구문
        [return 결과;]
      }
*/

               // ...args 들어오는 모든 것을 args 이름의 배열에 담기
function restTest(...args) {
  console.log(args);
  console.log(Array.isArray(args));

  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

restTest();   // true: 배열이 맞음
restTest('a', 'b', 'c');


/*
  * 기본 매개변수 (default parameter) 
  1) 매개변수에 기본값을 설정할 수 있음 
  2) 함수 호출시 인자값이 전달되지 않을 경우 또는 undefined가 전달될 경우 기본값이 대입되도록 설정 
  3) ES6 이후 도입된 문법 
  4) 작성법
      function 함수명([매개변수] = 기본값){
        실행구문
        [return 결과;]
      }
*/


function defaultTest(x = 1, y = 2) {
  console.log(`x: ${x}, y: ${y}`);
}

defaultTest(10, 20);
defaultTest(100);
defaultTest(undefined, 100);


/**
 * 📌 반환 (return)
 * 1. 함수 실행 후 특정값을 반환할때 return 구문과 함께 값 작성 
 * 2. return 값; 을 통해 호출한 곳으로 값이 반환되며 함수 종료
 * 3. return; 을 통해 함수 강제 종료 가능
 */


function sum(a, b) {
  console.log('덧셈연산 실행중...');
  return a + b;

  console.log('나오냐?');
  // 반환문 이후의 코드는 실행되지 않고 무시된다(실행될 수 없는 코드)
}

console.log(sum(10, 20));   // 호출

const result = sum(10, 20);   // 변수 저장
console.log(result);   // 호출



function printMessage(name) {
  if(!name) {
    return;
  }

  console.log(`${name}님 환영합니다. `);
}
  
printMessage('홍길동');
printMessage();   //값이 falsy값이어서 실행되지X
                  // return에 막혀버림