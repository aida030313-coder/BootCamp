/**
 * 📌 ES11에 추가된 연산자
 * 1. null 병합 연산자 (??)
 *   1) nullish coalescing operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 평가하여 반환 
 *   3) 기존에 좌항이 falsy 값일 경우 오른쪽 피연산자를 평가했던 || 와 달리 
 *      0, '', false 값은 유효한 값으로 처리함 
 * 2. 옵셔널 체이닝 연산자 (?. 또는 ?[])
 *   1) optional chaining operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환, 
 *      그렇지 않으면 우항의 프로퍼티 참조를 이어감 
 *   3) null 병합 연산자와 동일하게 0, '', false 값은 유효한 값으로 처리함
 *   4) 주로 객체의 프로퍼티 참조할때 사용 
 */

var test = null ?? '기본값';   // 변수의 기본값을 설정하고 싶을 때? 사용
console.log(test);

var obj = null;
var val = obj?.value;   // obj로 접근해서 val로 받아오기
                        // ?을 붙여 null을 안정적으로 받아오기
console.log(val);       // 결과는 undefined