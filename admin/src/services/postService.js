import { apiClient } from "./apiService";

export const getPostService = async () => {
  return await apiClient.get("/posts");
};

export const getPostIDService = async (title, category) => {
  const decodedSlug = decodeURIComponent(title);
  return await apiClient.get(`/posts/${decodedSlug}/${category}`);
};
export const getPostByIDService = async (id) => {
  return await apiClient.get(`/posts/${id}`);
};
export const addPostService = async (data) => {
  return await apiClient.post("/posts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const editPostService = async (id, data) => {
  return await apiClient.put(`/posts/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const deletePostService = async (postId) => {
  return await apiClient.delete(`/posts/${postId}`);
};
