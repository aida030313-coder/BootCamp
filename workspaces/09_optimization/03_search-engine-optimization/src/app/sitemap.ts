import { getPosts } from "@/post.service";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseUrl = 'http://lacalhost:3000'

    // 1. 정적 페이지 ( /(홈), /blog(블로그), /about(소개) )
    const staticPages = [
        {
            // /(홈)
            url: `${baseUrl}`,
            lastModified: new Date(),               // 마지막으로 업데이트된 날짜(최근 배포일)
            changeFrequency: 'daily' as const,      // 갱신되는 주기
            priority: 1                             // 사이트 내에서의 중요도
        },
        {
            // /blog(블로그)
            url: `${baseUrl}/blog`,
            lastModified: new Date(),              
            changeFrequency: 'daily' as const,     
            priority: 0.9                           
        },
        {
            // /about(소개)
            url: `${baseUrl}/about`,
            lastModified: new Date(),               
            changeFrequency: 'monthly' as const,      
            priority: 0.5                          
        },
    ]

    // 2. 동적 페이지
    const blogPosts = await getPosts();
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8
    }))

    return [...staticPages, ...blogPages]
}