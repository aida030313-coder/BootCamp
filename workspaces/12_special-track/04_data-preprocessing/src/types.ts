// 원본 데이터 타입 (모두 String일 확률이 높음)
export interface RawStock {
  rank: number;
  name: string; // 예: "  삼성전자  "
  currentPrice: string; // 예: "70,000원"
  changeRate: string; // 예: "+1.54%"
  volume: string; // 예: "10,000,000주"
}

// 정제 및 가공 후 데이터 타입
export interface ProcessedStock {
    id: string;         // 고유 식별자(종목 코드나 종목명)
    name: string;       // 종목명
    price: number;      // 현재 주가
    volume: number;     // 거래량
    isRising: boolean   // 상승 여부
}

// 시장 요약 통계 타입
export interface StockSummary {
    risingCount: number;        // 상승 종목 수
    fallingCount: number;       // 하락 종목 수
    totalVolume: number;         // 전체 거래량
}