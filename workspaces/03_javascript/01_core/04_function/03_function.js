/**
 * 📌 즉시 실행 함수 
 * 1. 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 실행되며 다시 호출 할 수 없음
 * 2. 정의한 함수를 ()-그룹연산자 로 감싼 후 ()을 붙여 실행 
 * 3. 익명 함수를 사용하는게 일반적임 
 * 4. 기명 함수도 가능하긴 하나 해당 이름으로 다시 재호출은 불가
 */
 

// 다시 호출 불가능한 일회성 함수
(function() {
    console.log('익명 즉시 실행 함수, 함수 정의와 동시에 호출')
})();

(function hello(name) {
    console.log(`${name}님 안녕`);
})('홍길동');

// hello('김길동');


/**
 * 📌 중첩 함수 
 * 1. 함수 내부에서 정의된 함수를 중첩함수 또는 내부함수라고 함 
 * 2. 중첩함수를 포함하는 함수는 외부함수라고 함 
 * 3. 일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 함 
 * 4. 외부함수는 내부함수 변수를 사용할 수 없음
 *    단, 내부함수는 외부함수의 변수를 사용할 수 있음 
 */


function outer() {

    var outerVal = '외부함수';

    function inner() {

        var innerVal = '내부함수'
        console.log(innerVal, outerVal);   //  외부함수의 변수도 참조 가능
    }

    inner();
}

outer();
// inner();   // 내부에서만 사용되는 함수이기 때문에 외부에서 호출 불가능


/**
 * 📌 콜백 함수 
 * 1. 인자로 다른 함수에 전달되서 실행되는 함수 
 * 2. 콜백함수를 전달받은 함수는 고차함수 라고 함 
 * 3. 즉, 콜백함수는 고차함수에 전달되어 헬퍼함수의 역할을 함
 * 
 * a 함수를 전달받은 b 함수는 본문에서 전달받은 a 함수를 다시 호출해야되므로 callback이라 함 
 * a 함수 == 콜백함수
 * b 함수 == 고차함수 
 */


function increase(value) {
    return value + 1;
}

function decrease(value) {
    return value - 1;
}

function apply(value, func) {   // value = 값; func = 실행시킬 함수;
    return func(value);
}

console.log(apply(5, increase));   // apply = 적용
console.log(apply(5, decrease));


console.log(apply(5, (a) => a * 2));   // 화살표 함수 자체에 return 포함

console.log(apply(5, function(a) {return a * 3;}));



const idCheck = () => console.log('아이디 체크 로직 진행');
const pwdCheck = () => console.log('비밀번호 체크 로직 진행');


// 로그인 처리용 함수 정의
const login = (check1, check2) => {
    console.log('로그인 공통 로직 먼저 실행');
    //  검증을 위한 두 개의 함수 실행
    check1();
    check2();
}

login(idCheck, pwdCheck);