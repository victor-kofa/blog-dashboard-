import PostItem from "@/components/PostItem";
import ErrorMessage from "@/components/ErrorMessage";
import { getPosts } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const POSTS_PER_PAGE = 10;

interface Props {
  searchParams: Promise<{ page?: string }>; 
}

export default async function PostsPage({ searchParams }: Props) {
  try {
    // Await searchParams before using
    const params = await searchParams;
    const page = Number(params.page) || 1;

    const posts = await getPosts();
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const paginatedPosts = posts.slice(start, end);

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

        {/* Post cards */}
        <div className="space-y-4">
          {paginatedPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={`/posts?page=${page - 1}`} />
                  </PaginationItem>
                )}

                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`/posts?page=${i + 1}`}
                      isActive={page === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={`/posts?page=${page + 1}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return <ErrorMessage message={error.message || "Failed to load posts"} />;
  }
}
