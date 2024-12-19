import { apiClient } from "./apiService";

export const addCommentService = async (data) => {
  return await apiClient.post("/comment", data);
};
export const deleteCommentService = async (id) => {
  return await apiClient.delete(`/comment/${id}`);
};
export const deletePostService = async (postId) => {
  return await apiClient.delete(`/posts/${postId}`);
};
