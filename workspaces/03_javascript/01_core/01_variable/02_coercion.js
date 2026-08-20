/**
 * 📌 암묵적 타입 변환 vs 명시적 타입 변환
 * 1. 암묵적 타입 변환 (implicit-coercion)
 *   1) 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것
 *   2) 암묵적 타입 변환은 코드에서 드러나지 않으므로 타입 변환된 결과를 예측할 수 있어야 오류 방지 가능
 * 2. 명시적 타입 변환 (explicit-coercion)
 *   1) 개발자의 의도에 따라 값의 타입을 변환시키는 것
 *   2) 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를 사용하는 방법,
 *      빌트인 메소드를 사용하는 방법이 있음
 */


// 1. 문자열타입(string)으로 변환

// 1) 문자열 연결 연산자(+): 암묵적 변환
console.log(10 + '20');   //'10' + '20' => '1020'
console.log(true + 'hi!!!');

// 2) 템플릿 리터럴의 표현식 삽입: 암묵적 변환
console.log(`결과 : ${10 + 20}`); // '결과 : 30'

// 3) String  생성자 함수 이용: 명시적 변환
console.log(String(10));
console.log(String(true));

// 4) .toString() 메소드 이용
console.log((10).toString());



// 2. 숫자 타입(number)으로 변환

// 1) 산술연산자(-*/%)에 의한 변환: 암묵적 변환
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');


console.log(+'');   //빈 문자열을 암묵적 변환 시 0으로 변환되어 결과값 0
console.log(10 % 'javascript');   //문자가 포함되어 암묵적 변환이 불가능하여 결과값 NaN

// 2) 비교연산자에 의한 변환
console.log(10 > '5');
console.log('a' < 'b');

// 3) Number 생성자 함수 이용
console.log(Number('10'));
console.log(Number('10.01'));
console.log(Number('javascript'));
console.log(Number(true));
console.log(Number(false));

// 4) parseInt(), parseFloat() 함수 이용
console.log(parseInt('10'));   //Int = 정수
console.log(parseFloat('10'));   //Float = 실수
console.log(parseInt('10.01.01'));   //정수로 읽을 수 있는 부분까지만 읽고 출력
console.log(parseFloat('10.01.01'));   //실수로 읽을 수 있는 부분까지만 읽고 출력


// 3. 논리타입(boolean)으로 변환
if(true) console.log('if(true)');
if(false) console.log('if(false)');

if(undefined) console.log('if(undefined)');   //Falsy
if(null) console.log('if(null)');   //Falsy
if(10) console.log('if(10)');   //Truthy
if(0) console.log('if(0)');   //Falsy
if(NaN) console.log('if(NaN)');   //Falsy
if('안녕') console.log('if(안녕)');   //Truthy
if('') console.log('if()');   //Falsy