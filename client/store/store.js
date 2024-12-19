import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import categorySlice from "@/features/category/categorySlice";
import commentSlice from "@/features/comment/commentSlice";
export const store = configureStore({
  reducer: {
    post: postSlice,
    category: categorySlice,
    comment: commentSlice,
  },
});
