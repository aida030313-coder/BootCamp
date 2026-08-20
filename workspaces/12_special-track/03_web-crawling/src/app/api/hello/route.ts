// 이 파일의 엔드포인트: /api/hello

import { NextResponse } from "next/server"

/*
    ### Next.js의 API Route
    1. 서버리스 함수 형태로 동작하는 백엔드 엔드포인트를 만들 수 있는 기능
    2. Next.js 프로젝트 안에서 클라이언트(프론트엔드)와 서버(백엔드) 모두 구현 가능
    3. API Route를 통해 별도의 서버를 구축하지 않고도 데이터 처리하거나 외부 서비스와 통신 가능
    4. 파일 단위로 만들어진 각 API Route는 일반적인 REST API 엔드포인트로 잡힘
       GET/POST/PUT/DELETE 등 HTTP 메소드 지원
*/

export async function GET() {   // api/hello GET

    console.log('api/hello 서버사이드 코드 동작함!!!');

    return NextResponse.json({
        success: true,
        message: '이건 Nest.js API Route(백엔드)에서 보낸 메시지야!',
        data: {
            description: '/api/hello 엔드포인트로 요청하면 보내지는 메시지야.',
            count: 30
        }
    })
}

// export async function POST(request: NextRequest) {

// }