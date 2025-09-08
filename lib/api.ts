import { Comment, Post, User } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000, //  auto-fail if API is too slow
});

// Utility function to handle errors
function handleError(message: string, error: unknown): never {
  if (axios.isAxiosError(error)) {
    throw new Error(
      error.response?.data?.message || `${message} (Status: ${error.response?.status})`
    );
  }
  throw new Error(message);
}


// API functions
export async function getPosts(): Promise<Post[]> {
  try {
    const { data } = await api.get<Post[]>("/posts");
    return data;
  } catch (error) {
    handleError("Unable to load posts. Please try again later.", error);
  }
}

export async function getPost(id: number): Promise<Post> {
  try {
    const { data } = await api.get<Post>(`/posts/${id}`);
    return data;
  } catch (error) {
    handleError("Unable to load this post. Please try again later.", error);
  }
}

export async function getUser(id: number): Promise<User> {
  try {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  } catch (error) {
    handleError("Unable to load author information.", error);
  }
}

export async function getAllUsers(): Promise<User[]> {
  try {
    const { data } = await api.get<User[]>("/users");
    return data;
  } catch (error) {
    handleError("Unable to fetch users.", error);
  }
}

export async function getComments(postId: number): Promise<Comment[]> {
  try {
    const { data } = await api.get<Comment[]>(`/posts/${postId}/comments`);
    return data;
  } catch (error) {
    handleError("Unable to load comments.", error);
  }
}
