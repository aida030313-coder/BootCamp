/**
 * 📌 Node.js 세팅 
 * 1. https://nodejs.org/
 * 2. LTS(Long Term Support) 버전 다운로드 후 기번 설정으로 설치
 * 3. cmd 에서 node -v, npm -v 입력하여 버전 확인
 * 4. cmd 에서 node 입력 하여 프롬프트 >로 변경되면 자바스크립트 코드(1+2) 실행해보기 
 * 
 * 📌 js 파일 Node로 실행하기 
 * ✅ 방법1. node 명령어 직접 사용   
 * 1) VS Code에서 js 파일 작업 후 
 * 2) 실행할 파일이 위치한 곳의 터미널 창(ctrl + `) 켜서 node 명령어와 함께 js 파일 실행 
 * 
 * ✅ 방법2. Code Runner (Extension) 사용
 * 1) Code Runner (Extension) 설치 후 
 * 2) ctrl + alt + n 눌러서 실행 
 */

/**
 * 📌 JavaScript 타입(자료형)
 * 1. 원시 타입 (Primitive Types)   >>원시타입 내 타입들 외워두기
 *   1) number
 *       → 숫자 타입
 *       → 정수, 실수 구분없이 모두 number 타입으로 처리
 *       → 2의 53승 - 1 까지의 정수(음수, 양수) 표현 가능
 *       → 추가적으로 NaN(Not a Number), Infinity, -Infinity가 있음
 *   2) string
 *       → 문자열 타입
 *       → 단일 문자와 문자열의 구분이 없음
 *       → 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트 데이터를 감싸서 표현
 *   3) boolean
 *       → 불리언 타입
 *       → 참인지 거짓인지의 논리값을 가짐
 *       → true / false 값 취급
 *   4) null
 *       → null 타입
 *       → 변수에 값이 없다는 것을 의도적으로 명시할 때 사용
 *   5) undefined
 *       → undefined 타입
 *       → 선언 후 값을 할당하지 않은 변수 (즉, 초기화가 되어있지 않은 변수)
 *       → 또는 값이 전달되지 않은 매개변수
 *   6) symbol (ES6)
 *       → 변경 불가능한 원시 타입의 값
 *       → 다른 값과 중복 되지 않는 유일무이한 값
 *       → 주로 이름이 충돌되면 안되는 객체의 프로퍼티(속성) 키를 만들때 사용
 *       → Symbol() 함수를 통해 생성 (다른 원시 값들은 리터럴을 통해 생성)
 *   7) bigint (ES11)
 *       → 2의 53승 - 1 보다 더 큰 숫자 표현 가능
 *       → number 타입으로 취급할 수 있는 숫자 크기의 제한을 극복하기 위해 ES11(ES2020)에서 도입
 * 
 * 2. 객체 타입 (Object/Reference Types)
 *   1) object
 *       → 객체 타입
 *       → 객체 자료형으로 메소드(method)와 속성(property)를 가지는 데이터
 *       → 원시값(primitive-value)을 제외한 배열, {}, 요소 등의 타입이 모두 object
 *   2) function
 *       → 함수 타입
 *       → 함수 자료형으로 특정 작업을 수행하는 코드 블록
 *   등등..
 */ 
 
/*
  * 숫자 타입 
  1. number
  2. 자바스크립트의 경우 하나의 숫자 타입만 존재
  3. 모든 수를 실수로 취급함 
  4. 추가적으로 특별한 값도 표현가능 
    1) Infinity  : 양의 무한대
    2) -Infinity : 음의 무한대
    3) NaN       : 산술 연산 불가(not-a-number)
*/


var integer = 10;   //숫자타입
var double = 5.5;
var negative = -10;

console.log(integer, typeof(integer));
console.log(double, typeof(double));
console.log(negative, typeof(negative));

console.log(10 === 10.0);

console.log(10/4);


/*
  * 문자열 타입 
  1. string
  2. 텍스트 데이터를 나타내는데 사용
  3. 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트 데이터를 감싸서 표현
  4. 자바는 문자열을 객체로 표현하지만 자바스크립트의 문자열은 원시(primitive) 타입이다
*/


var str = 'javascript';
str = "hello";
str = '!!';

console.log(str, typeof(str));


/*
  * 템플릿 리터럴 
  1. ES6부터 도입된 멀티라인 문자열
  2. 표현식 삽입(${}) 등 편리한 문자열 처리 기능을 제공 
  3. 백틱(``)으로 표현
*/


// var str2 = '안녕하세요.
// 반갑습니다.';

// 해결1. 개행(줄바꿈)을 표현하는 이스케이프시퀀스 사용
var str2 = '안녕하세요. \n반갑습니다.'
console.log(str2)

//해결2. 템플릿 리터럴(``) 사용
var multiline = `안녕하세요.
반갑습니다.`;
console.log(multiple);

var lastName = '홍';
var firstName = '길동';

// 불편. 여러 문자열 데이터를 +를 사용해 연결
console.log('제 이름은 ' + lastName + firstName + '입니다.');

// 해결. 템플릿 리터럴 + 표현식 삽입구문(${})
console.log('제 이름은 ${lastName}${firstName} 입니다.')

/*
  * 논리 타입 
  1. boolean
  2. 논리적 참, 거짓을 나타내는 true, false 값 취급
*/


var flag = true;
console.log(flag, typeof(flag));
flag = false;
console.log(flag,typeof(flag));


/*
  * undefined 
  1. var로 선언한 변수에 직접 값을 초기화 하지 않으면 
     암묵적으로 undefined로 초기화 됨 
  2. 따라서 직접 초기화 하지 않은 변수를 참조하면 undefined가 반환됨 
  3. undefined는 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값 
*/


var undef;
console.log(undef, typeof(undef));


/*
  * null 
  1. 변수에 값이 없다는 것을 의도적으로 명시할 때 사용
  2. 이전에 할당 되어 있던 값에 대한 참조를 제거하는 것을 의미함
*/


var nullVal = 'something';
nullVal = null;
console.log(nullVal, typeof(nullVal));


/*
  * object 
  1. 객체 타입 (자바스크립트는 크게 원시(primitive)타입 / 객체타입으로 분류)
  2. 자바스크립트의 거의 모든 것이 객체 (배열, 함수 등등..)
     number, string, boolean, undefined, null, symbol 외의 모든 값을 객체로 취급 
*/


var user = {
    name: "홍길동",
    age: 17
};

console.log(user, typeof(user));


/*
  * Symbol 
  1. ES6에서 추가된 타입
  2. 변경 불가능한 원시 타입의 값
  3. 다른 값과 중복 되지 않는 유일무이한 값
  4. 주로 이름이 충돌되면 안되는 객체의 프로퍼티(속성) 키를 만들때 사용
  5. Symbol() 함수를 통해 생성 (다른 원시 값들은 리터럴을 통해 생성)
*/


var key = Symbol('academy');
console.log(key, typeof(key));


/*
  * bigint
  1. ES11에서 추가된 타입
  2. number 타입으로 취급할 수 있는 숫자 크기의 제한을 극복하기 위해 ES11(ES2020)에서 도입
*/


var bigint= 12345678910111213141516171819n;
console.log(bigint, typeof(bigint));


/**
 * 📌 정적 타입 언어 vs 동적 타입 언어
 * 1. 정적 타입(static/strong type) 언어
 *   1) C, C++, Java, Kotlin 등
 *   2) 변수 선언시 데이터 타입을 사전에 선언(명시적 타입 선언)해야됨 (static type)
 *   3) 변수 타입 변경 불가 (strong type)
 *   4) 타입에 맞는 데이터만 할당 가능 
 *   5) 장단점
 *       → 장점 : 신뢰성이 높음 (컴파일 시점에 타입 체크 수행 => 타입의 일관성을 강제하여 런타임 에러 줄임)
 *       → 단점 : 유연성이 떨어짐 
 * 2. 동적 타입(dynamic/weak type) 언어
 *   1) JavaScript, Python 등
 *   2) 변수 선언시 데이터 타입을 사전에 선언하지 않음
 *   3) 변수 선언이 아닌 할당(대입)에 의해 타입이 결정됨 (dynamic type)
 *   4) 재할당에 의해 변수 타입은 언제든지 변경 될 수 있음 (weak type)
 *   5) 장단점
 *       → 장점 : 유연성이 높음 (타입에 구애받지 않고 원하는 값 대입 가능)
 *       → 단점 : 신뢰성이 떨어짐 (개발자 의도와 상관없이 타입이 변경될 수 있음)
 *                => 데이터 타입 체크를 매번 해야됨 
 *                => 번거로움, 코드의 양 증가
 */


var test;
console.log(typeof(test));
test = 1;
console.log(typeof(test));
test = "안녕";
console.log(typeof(test));