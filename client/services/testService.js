import { apiCLient } from "./apiService";

export const getTestService = async () => {
  return apiCLient.get("https://jsonplaceholder.typicode.com/posts");
};
