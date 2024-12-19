import { apiClient } from "./apiService";

export const getCategoryService = async () => {
  return await apiClient.get("/categories");
};

export const getCategoryIDService = async (category) => {
  return await apiClient.get(`/categories/${category}`);
};
