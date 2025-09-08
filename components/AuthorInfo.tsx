'use client ';

import { User } from '@/types'


interface AuthorInfoProps {
    author: User
}
export default function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="p-4 mt-4 border rounded-lg shadow bg-white">
      <h3 className=" font-semibold">Author: {author.name}</h3>
      <p className="text-gray-600">Email: {author.email}</p>
    </div>
  )
}
