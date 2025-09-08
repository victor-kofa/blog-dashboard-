"use client";

import { Comment } from "@/types";

interface CommentListProps {
  comments: Comment[];
}
export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="border-b py-2">
          <p className="font-bold">{comment.name}</p>
          <p className="text-gray-500">{comment.email}</p>
          <p className="text-gray-600">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
