// endpoint: /api/chat/basic

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

        // 3. Gemini API 연동 (REST API 방식)
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey
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
            
            console.log('?', response);
        // Gemini API 요청이 실패한 경우
        if(!response.ok) {
            return NextResponse.json({
                error: "Gemini API 오류"
            }, { status: response.status })
        }

        // 4. Gemini 응답을 프론트로 전달
        const data = await response.json();

        console.log('data????????????', data);

        return NextResponse.json({
            success: true,
            message: data.candidates[0].content.parts[0].text
        })


    } catch(error) {

        console.error('서버 측 오류 : ', error);

        return NextResponse.json({
            error: "서버 측에서 오류가 발생했습니다"
        }, {
            status: 500
        });

    }

}