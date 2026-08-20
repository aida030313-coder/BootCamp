// endpoint: /api/chat/stream

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    try {

        // 1. 프론트에서 전달되는 메시지 받기
        const { message } =  await request.json();  // { message: '~~~~' }

        if(!message) {
            return NextResponse.json({
                error: '메세지가 누락되었습니다.'
            }, { status: 400 });
        }

        // 2. Gemini API Key 가져오기 (환경변수)
        const apiKey = process.env.GEMINI_API_KEY;
        if(!apiKey) {
            return NextResponse.json({
                error: "Gemini API Key가 설정되어있지 않습니다."
            }, { status: 500 });
        }

        // 3. Gemini API 연동 (Streaming 방식)
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // Gemini에게 전달할 요청 데이터
                    contents: [
                        {
                            // 하나의 대화(사용자 메시지)
                            parts: [
                                {
                                    // 실제 프롬프트 내용
                                    text: `당신은 친절한 AI입니다. 항상 한국어로 대답하세요.\n\n${message}`
                                }  
                            ] 
                        }
                    ]
                })
            });

        // Gemini API 요청이 실패한 경우
        if(!response.ok) {
            return NextResponse.json({
                error: "Gemini API 오류"
            }, { status: response.status })
        }

        // 4. Gemini 응답 (response.body) ReadableStream
        const stream = new ReadableStream({
            // start: 스트림이 시작될 때(클라이언트가 연결되면) 자동으로 호출되는 함수
            // controller: 스트림 데이터를 전송(push)/종료(close)할 수 있는 컨트롤러 객체
            start: async (controller) => {
                
                const reader = response.body?.getReader();
                const decoder = new TextDecoder();
                const encoder = new TextEncoder();

                if(!reader) {
                    controller.close();   // 응답 body가 없으면 스트림 종료
                    return
                }

                try {
                    // reader를 통해 Gemini 응답을 청크 단위로 계속 읽어오는 과정
                    while(true) {

                        // done: 스트림 종료 여부
                        // value: 읽어온 바이너리 데이터
                        const { done, value} = await reader.read();   // done, value
                        if(done) {
                            controller.close();   // 응답이 모두 끝나면 스트림 종료
                            break;
                        }

                        // 바이너리 데이터를 문자열로 반환(디코딩)
                        const chunk = decoder.decode(value, { stream: true });
                        // console.log(chunk)
                        // data: {JSON 문자열}

                        const lines = chunk.split("\n");
                        for(const line of lines) {

                            // console.log('line-', line);

                            // "data: "로 시작하는 데이터만 처리
                            if(!line.startsWith("data: ")) continue;

                            // "data: "제거 후 JSON 문자열 추출
                            const data = line.slice(6).trim();

                            // console.log(data);

                            // 빈 데이터는 무시
                            if(!data) continue;

                            try {

                                // JSON 문자열 -> JavaScript 객체로 변환
                                const json = JSON.parse(data);

                                // Gemini 응답에서 생성된 텍스트 추출
                                const content = json.candidates?.[0]?.content?.parts?.[0]?.text || "";

                                if(content) {
                                    // 프론트엔드로 SSE 방식으로 content 전달 (data: JSON 문자열 \n\n)
                                    // JSON 문자열 => 바이너리 데이터 => 프론트로 흘려보내기
                                    const sseData = `data: ${JSON.stringify({ content })}\n\n`;

                                    controller.enqueue(encoder.encode(sseData));
                                }

                            } catch {
                                // JSON 파싱 실패(빈 줄 등)는 무시

                            }
                        }
                    }

                } catch(error) {
                    console.log('스트림 처리 오류', error);
                    controller.error(error);
                } finally {
                    // Reader 사용 종료
                    reader.releaseLock();
                }
            }
        });

        // 5. 클라이언트 측으로 응답 (body: stream 객체, headers: SSE 방식 지정)
        return new Response(stream, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive"
            }
        })


    } catch(error) {
        return NextResponse.json({
            error: '서버 측에 오류가 발생하였습니다.'
        }, { status: 500 })
    }
    
}