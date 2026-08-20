# 1. 빌드 단계

# 1_1) 베이스 이미지
FROM node:20-alpine AS builder 
# 1_2) 작업 디렉토리 설정
WORKDIR /app
# 1_3) 의존성 파일 복사
COPY package.json package-lock.json ./
# 1_4) 의존성 설치
RUN npm ci
# 1_5) 소스 코드 전체 복사
COPY . .
# 1_6) Next.js 빌드
ARG API_URL
ENV NEXT_PUBLIC_API_URL=$API_URL
# .next/standalone 폴더에 프로덕션 실행에 필요한 최소한의 파일만 모아줌
RUN npm run build

# ==========================================
# 2. Runner Stage: 실제 실행할 이미지 (매우 가벼움)
# ==========================================
# 2_1) Base Image 지정
FROM node:20-alpine AS runner 
# 2_2) 작업 디렉토리 설정 
WORKDIR /app 
# 2_3) ⭐ builder 단계에서 생성된 필요한 파일만 복사해오기 
# - public 폴더 (이미지, 폰트 등 정적 파일)
COPY --from=builder /app/public ./public
# - .next/standalone 폴더 (최적화로 빌드된 결과물)
COPY --from=builder /app/.next/standalone ./
# - .next/static 폴더  
COPY --from=builder /app/.next/static ./.next/static 
# 2_4) 포트 노출
EXPOSE 3000
# 2_5) 서버 실행 (standalone 모드의 진입점인 server.js를 실행)
CMD ["node", "server.js"]