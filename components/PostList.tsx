"use client";

import { Post } from "@/types";
import React from "react";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
