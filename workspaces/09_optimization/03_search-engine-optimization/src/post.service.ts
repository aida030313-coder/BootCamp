import { BlogPost } from "./post.type";

// 더미 데이터 
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Next.js 15의 새로운 기능들",
    excerpt: "Next.js 15가 출시되었습니다. 이번 버전에서 추가된 주요 기능들을 살펴보겠습니다.",
    content: `
      Next.js 15가 출시되면서 많은 개발자들의 관심을 받고 있습니다. 
      
      이번 버전의 주요 기능은 다음과 같습니다:
      
      1. **서버 액션 개선**: 서버 액션이 더욱 안정적이고 빨라졌습니다.
      2. **Turbopack 안정화**: 개발 서버가 훨씬 빨라졌습니다.
      3. **캐싱 전략 개선**: 더 세밀한 캐싱 제어가 가능해졌습니다.
      
      특히 Turbopack의 안정화는 대규모 프로젝트에서 큰 성능 향상을 가져다 줍니다.
      개발 서버 시작 시간이 70% 이상 단축되었으며, HMR(Hot Module Replacement) 속도도 크게 개선되었습니다.
      
      앞으로 Next.js는 더욱 빠르고 효율적인 프레임워크로 발전할 것으로 기대됩니다.
    `,
    author: "김개발",
    date: "2024-12-01",
    category: "프론트엔드",
    imageUrl: "/images/nextjs.png",
    readTime: "5분",
    tags: ["Next.js", "React", "웹 개발"]
  },
  {
    id: "2",
    title: "React 19 알파 버전 살펴보기",
    excerpt: "React 19 알파 버전이 공개되었습니다. 새로운 기능과 변경사항을 알아봅시다.",
    content: `
      React 팀이 드디어 React 19 알파 버전을 공개했습니다.
      
      주요 변경사항:
      
      1. **React Compiler**: 자동 메모이제이션으로 성능 최적화
      2. **Server Components 안정화**: 프로덕션 레벨의 서버 컴포넌트
      3. **Actions**: 폼 제출을 더 쉽게 다룰 수 있는 새로운 API
      
      React Compiler는 가장 주목할만한 기능입니다. 
      더 이상 useMemo, useCallback을 수동으로 작성할 필요가 없습니다.
      컴파일러가 자동으로 최적화를 처리해줍니다.
      
      Server Components는 이제 안정적으로 사용할 수 있는 수준이 되었으며,
      많은 프로덕션 앱에서 사용되고 있습니다.
    `,
    author: "이리액트",
    date: "2024-11-28",
    category: "프론트엔드",
    imageUrl: "/images/react.png",
    readTime: "7분",
    tags: ["React", "JavaScript", "프론트엔드"]
  },
  {
    id: "3",
    title: "TypeScript 5.3의 새로운 기능",
    excerpt: "TypeScript 5.3 버전의 새로운 기능과 개선사항을 정리했습니다.",
    content: `
      TypeScript 5.3이 릴리즈되었습니다. 이번 버전에서는 다양한 개선사항이 있습니다.
      
      주요 기능:
      
      1. **Import Attributes**: 새로운 import 문법 지원
      2. **Type Narrowing 개선**: 더 정확한 타입 추론
      3. **성능 최적화**: 컴파일 속도 향상
      
      Import Attributes는 JSON 모듈을 더 안전하게 import할 수 있게 해줍니다:
      
      \`\`\`typescript
      import json from "./data.json" with { type: "json" };
      \`\`\`
      
      Type Narrowing이 개선되어 switch 문과 같은 제어 흐름에서
      타입 추론이 더욱 정확해졌습니다.
    `,
    author: "박타입",
    date: "2024-11-25",
    category: "프로그래밍",
    imageUrl: "/images/ts.png",
    readTime: "6분",
    tags: ["TypeScript", "JavaScript", "개발도구"]
  },
  {
    id: "4",
    title: "Tailwind CSS로 빠르게 UI 만들기",
    excerpt: "Tailwind CSS를 활용한 효율적인 UI 개발 방법을 소개합니다.",
    content: `
      Tailwind CSS는 유틸리티 퍼스트 CSS 프레임워크입니다.
      
      장점:
      
      1. **빠른 개발 속도**: 클래스명만으로 스타일링
      2. **일관된 디자인**: 디자인 시스템이 내장되어 있음
      3. **작은 번들 크기**: 사용하지 않는 CSS 자동 제거
      
      Tailwind를 사용하면 CSS 파일을 별도로 작성할 필요 없이
      HTML(또는 JSX)에서 직접 스타일링할 수 있습니다:
      
      \`\`\`jsx
      <div className="flex items-center justify-center p-4 bg-blue-500 text-white">
        Hello Tailwind!
      </div>
      \`\`\`
      
      처음에는 익숙하지 않을 수 있지만, 한번 익숙해지면
      개발 속도가 크게 향상됩니다.
    `,
    author: "최스타일",
    date: "2024-11-20",
    category: "CSS",
    imageUrl: "/images/tailwind.png",
    readTime: "4분",
    tags: ["Tailwind CSS", "CSS", "UI/UX"]
  },
  {
    id: "5",
    title: "웹 성능 최적화 완벽 가이드",
    excerpt: "웹 사이트의 성능을 향상시키는 다양한 방법들을 알아봅니다.",
    content: `
      웹 성능은 사용자 경험에 직접적인 영향을 미칩니다.
      
      핵심 최적화 방법:
      
      1. **이미지 최적화**: WebP 포맷 사용, 적절한 크기 설정
      2. **코드 스플리팅**: 필요한 코드만 로드
      3. **캐싱 전략**: 정적 자산의 효율적인 캐싱
      4. **번들 크기 줄이기**: Tree shaking, 불필요한 라이브러리 제거
      
      Core Web Vitals를 개선하는 것이 중요합니다:
      
      - **LCP (Largest Contentful Paint)**: 2.5초 이하
      - **FID (First Input Delay)**: 100ms 이하
      - **CLS (Cumulative Layout Shift)**: 0.1 이하
      
      이러한 지표들을 개선하면 SEO 순위도 함께 올라갑니다.
    `,
    author: "정성능",
    date: "2024-11-15",
    category: "최적화",
    imageUrl: "/images/optimization.png",
    readTime: "10분",
    tags: ["성능 최적화", "웹 개발", "SEO"]
  },
  {
    id: "6",
    title: "SEO 기초부터 실전까지",
    excerpt: "검색 엔진 최적화의 기본 개념과 실전 적용 방법을 다룹니다.",
    content: `
      SEO(Search Engine Optimization)는 웹 개발자가 반드시 알아야 할 기술입니다.
      
      SEO의 3가지 핵심:
      
      1. **온페이지 SEO**: 메타 태그, 시맨틱 HTML, 콘텐츠 최적화
      2. **기술적 SEO**: 사이트맵, robots.txt, 구조화된 데이터
      3. **오프페이지 SEO**: 백링크, 소셜 미디어 공유
      
      Next.js에서 SEO를 위해 해야 할 것:
      
      - Metadata API를 활용한 메타 태그 설정
      - 시맨틱 HTML 태그 사용 (header, main, article 등)
      - Open Graph 태그로 소셜 미디어 미리보기 최적화
      - JSON-LD로 구조화된 데이터 제공
      - sitemap.xml과 robots.txt 설정
      
      SEO는 단기간에 결과가 나오지 않지만, 장기적으로 큰 효과를 가져옵니다.
    `,
    author: "한검색",
    date: "2024-11-10",
    category: "SEO",
    imageUrl: "/images/seo.png",
    readTime: "12분",
    tags: ["SEO", "웹 개발", "마케팅"]
  }
];

// API 통신 함수라는 가정 
// 전체 포스트 가져오기 
export async function getPosts(): Promise<BlogPost[]> {
  return blogPosts;
}
// 특정 포스트 가져오기
export async function getPostById(id: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.id === id);
}
// 카테고리별 포스트 가져오기
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}
// 최신 포스트 가져오기
export async function getLatestPosts(limit: number = 3): Promise<BlogPost[]> {
  return blogPosts.slice(0, limit);
}