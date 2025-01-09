import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import categorySlice from "@/features/category/categorySlice";
import mailSlice from "@/features/mail/mailSlice";
import authSlice from "@/features/auth/authSlice";
export const store = configureStore({
  reducer: {
    post: postSlice,
    category: categorySlice,
    mail: mailSlice,
    auth: authSlice,
  },
});
