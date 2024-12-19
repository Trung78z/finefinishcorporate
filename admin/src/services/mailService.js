import { apiClient } from "./apiService";

export const getMailService = async () => {
  return await apiClient.get("/mail");
};

export const getMailIDService = async (id) => {
  return await apiClient.get(`/mail/${id}`);
};

export const postMailService = async (data) => {
  return await apiClient.post(`/mail`, data);
};

export const deleteMailService = async (id) => {
  return await apiClient.delete(`/mail/${id}`);
};
