// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 최적화를 위해 필수입니다.
  // 빌드 시 .next/standalone 폴더에 실행에 필요한 최소한의 파일만 모아줍니다.
  output: "standalone", 
};

export default nextConfig;