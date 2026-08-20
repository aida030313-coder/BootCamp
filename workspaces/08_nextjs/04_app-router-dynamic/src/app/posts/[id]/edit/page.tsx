interface PostEditPageProps {
    params: Promise<{ id: string }>
}

export default async function PostEditPage({ params }: PostEditPageProps) {

    const { id } = await params;
    
    return (
        <div>
            <h1 className="text-2xl font-bold">{id}번 게시글 수정 페이지</h1>
        </div>
    );
}