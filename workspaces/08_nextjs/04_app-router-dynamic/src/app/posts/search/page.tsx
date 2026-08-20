interface PostSearchPageProps {
    // { searchParams: Promise<{condition: "xx", keyword: "xx"}> }
    searchParams: Promise<{
        condition: string;
        keyword: string;
    }>
}

export default async function PostSearchPage({ searchParams }: PostSearchPageProps) {

    /*
    const {searchParams} = useSearchParams();   [URLSearchParams 객체, 쿼리 수정하는 함수]
    const condition = searchParams.get("condition");       // "title"
    const keyword = searchParams.get("keyword")            // "안녕"
    데이터 패칭(condition, keyword)
    */

    const {condition, keyword} = await searchParams

    return (
        <div>
            <h1 className="text-2xl font-bold">게시글 검색 페이지</h1>
            <p>검색 조건: {condition}</p>
            <p>검색 키워드: {keyword}</p>
        </div>
    );
}