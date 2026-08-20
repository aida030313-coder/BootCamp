import { updatePostAction } from "../../actions";
import { getPostById } from "../../service";

export default async function PostEditPage({params}: {params: Promise<{id: string}>}) {
    
    const {id} = await params;
    const post = await getPostById(id);
    
    return (
        <form
            action={updatePostAction.bind(null, id)}
            className="flex flex-col max-w-100 gap-4 m-4">
            {/* id를 넘기는 방법 1. 고전적인 방법 - input hidden */}
            {/* <input type="hidden" name="id" defaultValue={post.id}/> */}
            <input
                type="text"
                name="title"
                placeholder="제목"
                className="border rounded border-gray-300 p-1"
                defaultValue={post.title}
                required
            />
            <textarea
                name="content"
                placeholder="내용"
                className="border rounded border-gray-300 p-1"
                defaultValue={post.content}
                required
            />
            <input
                type="text"
                name="author"
                placeholder="작성자"
                className="border rounded border-gray-300 p-1"
                defaultValue={post.author}
            />
            <button
                type="submit"
                className="bg-blue-200 rounded text-blue-700 font-bold mt-2 p-2"
            >수정</button>
        </form>
    );
}