import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {

    let browser;

    try {
        // 1) puppeteer 브라우저 실행
        browser = await puppeteer.launch({
            headless: false   // true(화면없이), false(화면 뜸) => 배포환경에서는 반드시 true
        })

        // 2) 새 탭(새 페이지) 열기
        const page = await browser.newPage();

        // 3) 페이지 이동
        await page.goto('https://example.com', {
            waitUntil: 'networkidle0'   // 네트워크 요청 작업이 다 끝날 때까지
        })

        // 4) 데이터 추출
        const title = await page.$eval('h1', (element) => element.textContent);
        const describtion = await page.$eval('p', (element) => element.textContent);

        return NextResponse.json({
            success: true,
            message: 'Puppeteer 연습 성공',
            data: {
                pageTitle: title,
                description: describtion
            }
        })

    } catch(error) {
        return NextResponse.json({
            success: false,
            message: 'puppeteer를 활용한 크롤링 중 오류가 발생했습니다.',
            error: error instanceof Error ? error.message: '알 수 없는 오류'
        }, { status: 500 })
    } finally {
        if (browser)
            await browser.close();
    }
}