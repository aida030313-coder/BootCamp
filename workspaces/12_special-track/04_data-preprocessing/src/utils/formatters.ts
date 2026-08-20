/*
    지저분한 가격/거래량 문자열을 순수 숫자타입으로 변환
    - 콤마, 공백, 단위 제거
    - 숫자가 아니면 NaN 반환

    예시)
    "80,000원" => 80000
    "-10,000,000주" => -10000000
    "" => NaN
*/

export const toNumberFromMixed = (raw: string): number => {

    // 1) 빈문자열 체크
    if(!raw) return NaN;

    // 2) 정규표현식으로 문자와 마이너스(-)만 남기기
    const cleaned = raw.replace(/[^0-9\-]/g, '');

    // 3) 숫자가 하나도 없으면 NaN 반환
    if(cleaned === "") return NaN;

    // 4) 숫자 타입으로 반환
    return Number(cleaned);
}

console.log(toNumberFromMixed("80,000원"));
console.log(toNumberFromMixed("-10,000,000주"));
console.log(toNumberFromMixed("N/A"));
console.log(toNumberFromMixed(""));


/*
    등락률 문자열(등락 표현 부호가 있음)을 숫자로 반환

    예시)
    "+1.5%" => 1.5
    "-0.5%" => -0.5
    "▼ 1.2%" => -1.2
*/

export const parseChangeRate = (raw: string): number => {

    if(!raw) return NaN;

    // 1) 하락 표시 포함 여부 확인
    const isNavigative = raw.includes('▼') || raw.includes('-')

    // 2) 숫자와 소수점만 남기기
    const cleaned = raw.replace(/[^0-9.]/g, "");
    if(cleaned === "") return NaN;

    // 3) 부호 반영한 숫자 반환
    return isNavigative ? -Number(cleaned) : Number(cleaned);
}

console.log(parseChangeRate("+1.5%"));
console.log(parseChangeRate("-0.5%"));
console.log(parseChangeRate("▼ 1.2%"));
console.log(parseChangeRate("N/A"));


/*
    문자열 특수문자/공백 제거

    예시)
    "[HOT] 카카오" => "카카오"
    "   삼성전자   " => "삼성전자"
    "   LG에너지솔루션\t" => "LG에너지솔루션"
*/

export const cleanString = (raw: string): string => {

    // 1) 대괄호 태그 제거 (ex. [HOT], [NEW], [BEST])
    const cleaned = raw.replace(/\[.*?\]/g, "");

    // 2) 앞뒤 공백 제거
    return cleaned.trim();
}

console.log(cleanString("[HOT] 카카오"))
console.log(cleanString("   삼성전자   "))
console.log(cleanString("   LG에너지솔루션\t"))