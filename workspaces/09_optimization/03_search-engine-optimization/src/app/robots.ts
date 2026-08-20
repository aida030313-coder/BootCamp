import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

    return {
        rules: [
            {
                userAgent: "*",                 // 모든 검색엔진 봇(Google, Naver, Bing 등)에 적용
                allow: "/",                     // 사이트 전체 경로의 크롤링 허용
                disallow: ["/admin", "/api"]    // 단, 관리자 페이지 및 API 경로는 크롤링 제외
            }
        ],
        sitemap: `http://localhost:3000/sitemap.xml`
    }
}