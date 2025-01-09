import { apiClient } from "./apiService";

export const getCategoryService = async () => {
  return await apiClient.get("/categories");
};

export const getCategoryIDService = async (category) => {
  return await apiClient.get(`/categories/${category}`);
};

export const postCategoryService = async (data) => {
  return await apiClient.post(`/categories`, data);
};

export const putCategoryService = async (id, data) => {
  return await apiClient.put(`/categories/${id}`, data);
};

export const deleteCategoryService = async (id) => {
  return await apiClient.delete(`/categories/${id}`);
};
