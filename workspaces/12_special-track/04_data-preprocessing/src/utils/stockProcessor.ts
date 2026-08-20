import { ProcessedStock, RawStock } from "@/types";
import { cleanString, parseChangeRate, toNumberFromMixed } from "./formatters";

// 개별 주식 데이터 정제 -> 반환
export const processStock = (raw: RawStock): ProcessedStock | null => {
    // 1) 이름 정제
    const name = cleanString(raw.name);   // "name: N/A 종목"

    if(!name || name.toUpperCase().includes('N/A'))
        return null;

    // 2) 현재 주가(가격), 거래량 정제
    const price = toNumberFromMixed(raw.currentPrice);
    const volume = toNumberFromMixed(raw.volume);
    // 결측치, 이상치가 넘어오면 null로 반환 작업
    if(Number.isNaN(price) || Number.isNaN(volume))
        return null;

    // 3) 등락률 정제
    const rate = parseChangeRate(raw.changeRate);

    // NaN이 아니고 양수일 경우 => true / 그게 아니면 => false
    const isRising = !Number.isNaN(rate) && rate > 0;

    // 4) 최종 반환
    return {
        id: name,
        name,
        price,
        volume,
        isRising
    }
}


// 배열 데이터를 한꺼번에 처리하는 함수
export const processStockPipeline = (rawList: RawStock[]): ProcessedStock[] => {

    const processed = rawList   // [RawStock, RawStock, ...]
    // 1단계: 각 raw 데이터를 clean 데이터를 반환
    .map((item) => processStock(item))   // [ProcessedStock, null, ProcessedStock, ...]
    // 2단계: null(결측치/이상치) 제거
    .filter((item) => item !== null)     // [ProcessedStock, ProcessedStock, ...]

    // 3단계: 중복 제거(종목 이름 기준)
    const stockNameSet = new Set<string>();
    const result: ProcessedStock[] = [];

    processed.forEach((item) => {
        // Set에 해당 종목명이 없으면(중복된게 없으면)
        if(!stockNameSet.has(item.name)) {
            // => Set에 종목명 담기 + 최종 결과 배열에 해당 종목 추가
            stockNameSet.add(item.name);
            result.push(item);
        }
    })

    return result;
}