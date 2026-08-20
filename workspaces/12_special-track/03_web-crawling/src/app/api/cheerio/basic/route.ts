import { NextResponse } from "next/server";
import * as cheerio from 'cheerio'

export async function GET() {
    try {
        const fetchedHTML =`
            <!DOCTYPE html>
            <html>
              <head>
                <title>웹 크롤링 연습 페이지</title>
              </head>
              <body>
                <h1 id="main-title">안녕하세요, 웹 크롤링!</h1>
                <p class="description">이것은 연습용 페이지입니다.</p>
                <a href="https://example.com" class="link">예시 링크</a>
                <img src="/image.jpg" alt="예시 이미지" />
              </body>
            </html>
        `;

        // 1) Cheerio로 HTML 로드 => DOM 탐색 가능
        const $ = cheerio.load(fetchedHTML);

        // 2) 필요한 데이터 추출
        const result = {
            // 텍스트 추출
            title: $('h1#main-title').text(),
            describtion: $('p.description').text(),
            linkText: $('a.link').text(),

            // 속성 추출
            linkUrl: $('a.link').attr('href'),
            linkAlt: $('img').attr('alt'),
            imageSrc: $('img').attr('src')
        }

        return NextResponse.json({
            success: true,
            message: '단일 데이터 추출 성공!',
            data: result
        })

    } catch(error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message: '알 수 없는 오류'
        }, { status: 500 })
    }
}