import Link from "next/link";
import { Button } from "@/components/ui/button";
import PostForm from "@/features/posts/components/PostForm";
import { getPostById } from "@/services/post.service";

export default async function EditPostPage({ params }: {params: Promise<{id: string}>}) {
  const { id } = await params;
  const post = await getPostById(id);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <div className="w-full max-w-2xl space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold md:text-3xl">게시글 수정</h1>
            <p className="text-sm text-muted-foreground">
              게시글의 내용을 수정한 뒤 저장하세요.
            </p>
          </div>
        </div>

        <PostForm mode="edit" initialPost={post} />
      </div>
    </div>
  );
}