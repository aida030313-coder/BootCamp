import { RawStock } from "@/types";

// 크롤링 또는 API 응답에서 왔다고 가정하는 더미 Raw Data
// - 공백, 단위(원/주), 콤마
// - 결측치/이상치/중복 포함
export const RAW_STOCKS: RawStock[] = [
  {
    rank: 1,
    name: "  삼성전자  ",
    currentPrice: "80,000원",
    changeRate: "+1.25%",
    volume: "10,000,000주",
  },
  {
    rank: 2,
    name: "SK하이닉스",
    currentPrice: " 120,500 ",
    changeRate: "-0.5%",
    volume: "5,500,000",
  },
  {
    // 이름에 불필요한 태그/기호 포함
    rank: 3,
    name: "[HOT] 카카오",
    currentPrice: "51,000원",
    changeRate: "+0.00%",
    volume: "2,300,000주",
  },
  {
    // 결측치(가격 없음)
    rank: 4,
    name: "네이버",
    currentPrice: "",
    changeRate: "+2.1%",
    volume: "1,000,000",
  },
  {
    // 이상치(문자열 'N/A')
    rank: 5,
    name: "N/A 종목",
    currentPrice: "N/A",
    changeRate: "N/A",
    volume: "N/A",
  },
  {
    // 중복 데이터 (삼성전자 2번 등장)
    rank: 6,
    name: "삼성전자",
    currentPrice: "80,000",
    changeRate: "+1.25%",
    volume: "10,000,000",
  },
  {
    // 공백/이상한 공백 문자 포함
    rank: 7,
    name: "  LG에너지솔루션\t",
    currentPrice: "   320,000원 ",
    changeRate: "▼ 1.2%",
    volume: "800,000주",
  },
];
