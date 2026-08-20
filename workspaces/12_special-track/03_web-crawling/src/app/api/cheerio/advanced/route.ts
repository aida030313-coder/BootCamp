import * as cheerio from 'cheerio'
import { NextResponse } from 'next/server'

// 위키피디아 메인페이지(대문) 크롤링
export async function GET() {
    try {

        // 1) fetch로 HTML 가져오기
        const response = await fetch('https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:%EB%8C%80%EB%AC%B8')
        const fetchedHTML = await response.text();

        console.log(fetchedHTML);

        // 2) Cheerio로 HTML 로드
        const $ = cheerio.load(fetchedHTML);

        // 3) 원하는 데이터 추출(페이지의 제목, 알찬 글, 최근 소식)
        const result = {
            pageTitle: $('h1#firstHeading').text().trim(),

            // 알찬글
            featureArticle: {
                title: $('#mwpg').text().trim(),
                description: $('#mwqQ').text().trim(),
                link: [] as Array<{title: string, href: string}>
            },
            // 최근 소식
            recentNews: [] as string[]
        };

        $('#mwqQ a').each((index, element) => {
            const title = $(element).text().trim();
            const href = $(element).attr('href') || '';
            result.featureArticle.link.push({title, href});
        })

        $('#mwxA li').each((index, element) => {
            result.recentNews.push( $(element).text().trim() );
        })

        return NextResponse.json({
            success: true,
            message: '위키피디아 대문 페이지 크롤링 성공!',
            data: result
        })

    } catch(error) {
        return NextResponse.json({
            success: false,
            message: '위키피디아 크롤링 중 오류가 발생했습니다.',
            error: error instanceof Error ? error.message: '알 수 없는 오류'
        }, { status: 500 })
    }
}