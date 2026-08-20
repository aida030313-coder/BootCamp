/*
    시장 요약 통계 계산
*/

import { ProcessedStock, StockSummary } from "@/types";

// export const analyzeStock = (data: ProcessedStock[]): StockSummary => {

//     let summary = {
//         risingCount: 0,
//         fallingCount: 0,
//         totalVolume: 0
//     }

//     data.forEach((item) => {   // 데이터를 순회하면서 누적/집계
//         // 1) 상승/하락 카운팅
//         if (item.isRising) {
//             summary.risingCount++;
//         } else {
//             summary.fallingCount++;
//         }
//         // 2) 전체 거래량 누적
//         summary.totalVolume += item.volume;
//     })

//     return summary;
// }


// reduce()
export const analyzeStock = (data: ProcessedStock[]): StockSummary => {
  const summary = data.reduce(
    (acc, item) => {
      if (item.isRising) {
        acc.risingCount++;
      } else {
        acc.fallingCount++;
      }

      acc.totalVolume += item.volume;

      return acc;
    },
    {
      risingCount: 0,
      fallingCount: 0,
      totalVolume: 0,
    },
  );

  return summary;
};