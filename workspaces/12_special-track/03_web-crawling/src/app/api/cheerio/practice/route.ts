import * as cheerio from 'cheerio'
import { NextResponse } from 'next/server'

export async function GET() {
    try {

        const response = await fetch('https://news.naver.com/section/105')
        const fetchedHTML = await response.text();

        const $ = cheerio.load(fetchedHTML);

        const title = await.$$eval('strong', (element) => element.textContent);

        // const result = {
        //     pageTitle: $('h1#sa_head_link _TOGGLE').text().trim(),

        //     // 헤드라인 뉴스
        //     headlineArticle: {
        //         title: $('strong#sa_text_strong').text().trim
        //     }
        // }

        // $('#sa_text_strong strong').each((index, element) => {
        //     const title = $(element).text().trim();
        // })

        return NextResponse.json({
            success: true,
            message: '뉴스(과학) 페이지 크롤링 성공!',
            data: {
                title: title
            }
            // summary: ,
            // press: ,
            // datetime: 
        })

    } catch(error) {
        return NextResponse.json({
            success: false,
            message: '뉴스(과학) 크롤링 중 오류가 발생했습니다.',
            error: error instanceof Error ? error.message: '알 수 없는 오류'
        }, { status: 500 })
    }
}