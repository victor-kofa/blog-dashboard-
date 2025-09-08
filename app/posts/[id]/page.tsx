import AuthorInfo from "@/components/AuthorInfo";
import CommentList from "@/components/CommentList";
import ErrorMessage from "@/components/ErrorMessage";
import { getComments, getPost, getUser } from "@/lib/api";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: Props) {
  try {
    const { id } = await params;
    const postId = Number(id);
    const post = await getPost(postId);
    const author = await getUser(post.userId);
    const comments = await getComments(postId);

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-xl font-bold mb-4">
          <Link href={"/posts"} className="text-blue-600 hover:underline">
            ← Back to Posts
          </Link>
        </h1>
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>

        <AuthorInfo author={author} />

        <h2 className="text-xl font-bold mt-8 mb-4">Comments</h2>
        <CommentList comments={comments} />
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return <ErrorMessage message={error.message || "An error occurred"} />;
  }
}
