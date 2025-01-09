import { apiClient } from "./apiService";

export const loginService = async (data) => {
  return await apiClient.post("/auth/login", data, { withCredentials: true });
};
export const refreshTokenService = async () => {
  return await apiClient.get(`/auth/refresh-token`, { withCredentials: true });
};
export const clearTokenService = async () => {
  return await apiClient.get(`/auth/clear-token`, { withCredentials: true });
};
