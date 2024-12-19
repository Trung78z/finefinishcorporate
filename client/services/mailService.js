import { apiClient } from "./apiService";

export const postMailService = async (data) => {
  return await apiClient.post(`/mail`, data);
};
