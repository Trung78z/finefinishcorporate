import axios from "axios";
export const API_URL = "http://localhost:8080";
export const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { "Content-Type": "application/json" },
});
