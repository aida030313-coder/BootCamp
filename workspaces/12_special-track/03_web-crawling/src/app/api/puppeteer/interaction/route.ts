import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {

    let browser;

    try {
        // 1) 브라우저 실행
        browser = await puppeteer.launch({
            headless: false
        })

        // 2) 새 페이지(탭) 열기
        const page = await browser.newPage();

        // 3) 네이버 메인 페이지로 이동
        await page.goto('https://www.naver.com', {
            waitUntil: 'networkidle0'
        });

        // 4) 검색어 입력 및 요청
        const searchQuery = "Next.js 웹 크롤링";
        await page.waitForSelector('input#query', { timeout: 5000 })   // 검색창 찾기
        await page.type('input#query', searchQuery)                    // 검색창에 검색어 타이핑(인터렉션)
        await page.keyboard.press('Enter');                            // 요청(인터렉션)

        // 5) 검색 결과 로딩 대기
        await page.waitForNavigation({
            waitUntil: 'networkidle0',
            timeout: 10000
        })

        // 6) 데이터(제목, 요약, 링크) 추출
        const searchResults = await page.$$eval('.yFgj5ObDLC47W_Hk', (elements) => {
            // elements === [div, div, div, div, ...]
            //           => [{title, summary, link}, {title, summary, link}, ...]
            return elements.map((el) => {

                const titleEl = el.querySelector('a.Is82mRNAW6IcjcL5');
                const summaryEl = el.querySelector('a.pKoIyirnD8ECdz1p');

                if(titleEl &&summaryEl) {
                    return {
                        title: titleEl.textContent.trim(),
                        link: titleEl.getAttribute('href'),
                        summary: summaryEl.textContent.trim()
                    }
                }
            })
        })

        return NextResponse.json({
            success: true,
            message: '네이버 검색 결과 크롤링 성공',
            searchQuery,
            resultcount: searchResults.length,
            data: searchResults
        })

    } catch(error) {
        return NextResponse.json({
            success: false,
            message: '네이버 검색 결과 크롤링 중 오류가 발생했습니다.',
            error: error instanceof Error ? error.message: '알 수 없는 오류'
        }, { status: 500 })
    } finally {
        if (browser)
            await browser.close();
    }
}