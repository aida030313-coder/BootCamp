/**
 * 📌 조건문 
 * 1. 특정 조건에 따라 코드 블럭을 실행하거나 건너뛰는 역할 
 * 2. 종류 및 작성법
 *   1) if문
 *       → 단일 if문 : 조건이 참일 때만 코드 블럭 실행 
 *          if(조건식) {
 *            조건이 참일 경우 실행할 구문;
 *          }
 *       → if-else문 : 조건이 참일 때와 거짓일 때 각각 다른 코드 블럭 실행 
 *          if(조건식) {
 *            조건이 참일 경우 실행할 구문;
 *          }else{
 *            조건이 거짓일 경우 실행할 구문;
 *          }
 *       → if-else if-else문 : 여러 조건을 체크하여 각각 다른 코드 블럭 실행 
 *          if(조건식1) {
 *            조건식1이 참일 경우 실행할 구문;
 *          }else if(조건식2) {
 *            조건식2이 참일 경우 실행할 구문;
 *          }else{
 *            조건식1과 조건식2가 모두 거짓일 경우 실행할 구문;
 *          }
 *   2) switch문
 *       switch(표현식) {
 *         case 값1:
 *           표현식이 값1일 경우 실행할 구문;
 *           break;
 *         case 값2:
 *           표현식이 값2일 경우 실행할 구문;
 *           break;
 *         default:
 *           표현식이 값1과 값2와 일치하지 않을 경우 실행할 구문;
 *           break;
 *       }
 * 
 * ‼️ 참고 및 유의 사항
 * 1) if문 에서 실행할 코드블럭이 1줄일 경우 중괄호 생략 가능 
 * 2) switch문 에서 break 문을 생략하면 다음 case문을 자동으로 실행함 
 *     → 즉, break문을 만날때까지 또는 switch문의 블럭 끝을 만날 때 까지 실행됨 
 */


// 1. if 문
// 사용자가 입력한 점수 값이 60점 이상일 경우 "합격했습니다." 출력

let score = 60;   // 40 이하인 경우 아무것도 출력되지X
if(score >= 60) {
    console.log("합격했습니다. ");
}

// 점수 값이 60점 이상일 경우 "합격했습니다.", 아닐 경우 "불합격입니다." 출력
if(score >= 60) {
    console.log("합격했습니다. ");
} else {
    console.log("불합격입니다. ");
}

// 점수값이 80점 이상일 경우 "합격", 80점 미만 60점 이상일 경우 "재평가", 60점 미만이면 "불합격" 출력
if(score >= 80) {
    console.log("합격");
} else if(score >= 60 && score < 80) {
    console.log("재평가");
} else {
    console.log("불합격");
}

// 사용자가 입력한 비밀번호 값
// 비밀번호 값이 누락되었을 경우 -> "비밀번호를 입력해주세요"
//             입력되었을 경우 -> 8글자 이상 -> "비밀번호 길이 초과입니다."
//             입력되었을 경우 -> 8글자 미만 -> "정상적인 비밀번호입니다."

let pwd ='1234567';
if(!pwd) {
    console.log("비밀번호를 입력해주세요. ");
} else {
    if(pwd.length > 8) {
        console.log("비밀번호 길이 초과입니다. ");
    } else {
        console.log("정상적인 비밀번호입니다. ");
    }
}


// 2. switch 문
// 사용자 입력값이 greet일 경우 "안녕!", bye일 경우 "잘가...", 그 외의 경우 "모르겠어." 출력
let command = 'greet';
switch(command) {
    case 'greet':
        console.log("안녕!");
        break;
    case 'bye':
        console.log("잘가...");
        break;
    default:
        console.log("모르겠어.");
}

if(command === 'greet') {
    console.log("안녕!");
} else if(command === 'bye') {
    console.log("잘가...");
} else {
    console.log("모르겠어.");
}