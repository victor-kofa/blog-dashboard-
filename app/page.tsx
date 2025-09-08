import ErrorMessage from "@/components/ErrorMessage";
import { getPosts } from "@/lib/api";
import PostList from "@/components/PostList";

export default async function Home() {
  try {
    const posts = await getPosts();
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        <PostList posts={posts.slice(0, 5)} /> {/* show just latest few */}
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return <ErrorMessage message={error.message || "An error occurred"} />;
  }
}
