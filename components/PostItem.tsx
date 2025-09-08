"use client";

import { Post } from "@/types";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="p-4 border rounded-lg shadow hover:bg-gray-50 flex flex-col justify-between">
      <div className="">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-800 text-sm mt-2 line-clamp-3">
          {post.body.substring(0, 80)}...
        </p>
      </div>
      <div className="mt-4">
        <Link href={`/posts/${post.id}`}>
          <Button
            variant={"outline"}
            className="mt-4 bg-rose-400 text-white hover:bg-rose-500 hover:text-white transition"
          >
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}
