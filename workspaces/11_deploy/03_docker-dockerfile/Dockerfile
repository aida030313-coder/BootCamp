# FROM : 베이스 이미지로 node 지정
FROM node:20-alpine

# WORKDIR : 컨테이너 내부의 기본 작업 경로를 /app 으로 지정
WORKDIR /app

# COPY : 로컬의 package.json을 컨테이너의 /app/ 으로 복사
# 프론트엔드 프로젝트에서 가장 많이 쓰는 명령어
COPY package.json ./

# COPY : 나머지 모든 소스 코드를 복사
COPY . .

# ADD : URL을 통해 외부 파일(예: 로고 이미지) 다운로드
# (잘 안 쓰지만 기능 확인용)
ADD https://raw.githubusercontent.com/facebook/react/main/README.md ./react-readme.md