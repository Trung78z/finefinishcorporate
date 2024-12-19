import { apiClient } from "./apiService";

export const getPostService = async () => {
  return await apiClient.get("/posts");
};

export const getPostIDService = async (title, category) => {
  const decodedSlug = decodeURIComponent(title);
  return await apiClient.get(`/posts/${decodedSlug}/${category}`);
};

export const addPostService = async (data) => {
  return await apiClient.post("/posts", data);
};
export const deletePostService = async (postId) => {
  return await apiClient.delete(`/posts/${postId}`);
};
