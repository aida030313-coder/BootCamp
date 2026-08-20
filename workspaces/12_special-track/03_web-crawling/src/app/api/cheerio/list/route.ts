import * as cheerio from 'cheerio'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const fetchedHTML = `
            <!DOCTYPE html>
            <html>
              <body>
                <ul class="news-list">
                  <li class="news-item">
                    <a href="/news/1" class="link">
                      <span class="title">속보! 코딩 공부하면 행복해진다</span>
                      <span class="author">기자 홍길동</span>
                    </a>
                  </li>
                  <li class="news-item">
                    <a href="/news/2" class="link">
                      <span class="title">Next.js 15 버전 출시</span>
                      <span class="author">기자 김철수</span>
                    </a>
                  </li>
                  <li class="news-item">
                    <a href="/news/3" class="link">
                      <span class="title">웹 크롤링으로 데이터 분석하기</span>
                      <span class="author">기자 이영희</span>
                    </a>
                  </li>
                </ul>
              </body>
            </html>
        `;

        const $ = cheerio.load(fetchedHTML);

        const newsList: { title: string, link: string, author: string }[] = [];

        // 데이터 추출
        // [li, li, li]
        $('.news-item').each((index, element) => {
            const title = $(element).find('.title').text().trim();
            const link = $(element).find('a').attr('href') || '';
            const author = $(element).find('.author').text().trim();

            newsList.push({title, link, author});
        })

        return NextResponse.json({
            success: true,
            message: '뉴스 리스트 크롤링 성공!',
            data: newsList
        })

    } catch(error) {
        return NextResponse.json({
            success: false,
            message: '뉴스 크롤링 중 오류가 발생했습니다.',
            error: error instanceof Error ? error.message: '알 수 없는 오류'
        }, { status: 500 })
    }
}