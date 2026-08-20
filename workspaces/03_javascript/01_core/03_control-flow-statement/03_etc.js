/**
 * 📌 기타 제어문 
 * 1. 반복문 내에 사용되며, 반복문의 흐름을 제어하는 역할 
 * 2. 주요 종류 및 작성법 
 *   1) break문 
 *      → 현재 속한 반복문을 종료하는 역할 
 *         break;
 *   2) continue문 
 *      → 현재 속한 반복문의 나머지 코드를 실행하지 않고 조건 검사로 이동하는 역할 
 *         continue;
 */

// 1. break 문
// 반복문 수행시마다 난수(랜덤값, 1~100) 발생시켜 출력
// 단, 발생된 랜덤값이 5의 배수일 경우 반복 종료

// 0.0 <= 난수 < 1.0 Math.random()
// 0.0 <= 난수 < 100.0 Math.random() * 100
// 0.0 <= 난수 < 101.0 Math.random() * 100 + 1
// 1 <= 난수 < 101 : Math.floor(Math.random() * 100 + 1)

while(true) {
    // 난수 발생시켜 출력
    let random = Math.floor(Math.random() * 100 + 1);
    console.log(random);

    if(random % 5 === 0) {
        break;
    }
}


// 2. continue
// 1부터 100까지의 총 합계를 구하기
// 단, 6의 배수 값은 빼고 합계 구하기
let sum = 0;

for(let i = 1; i <= 100; i++) {   // i = 1~100
    if (i % 6 === 0) {
        continue;
    }
    sum += i;
}
console.log(sum);