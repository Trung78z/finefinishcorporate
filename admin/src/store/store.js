import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import categorySlice from "@/features/category/categorySlice";
import mailSlice from "@/features/mail/mailSlice";
export const store = configureStore({
  reducer: {
    post: postSlice,
    category: categorySlice,
    mail: mailSlice,
  },
});
