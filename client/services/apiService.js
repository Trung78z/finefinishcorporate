import axios from "axios";
export const API_URL = "https://api.finefinishcorporate.com";
export const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { "Content-Type": "application/json" },
});
