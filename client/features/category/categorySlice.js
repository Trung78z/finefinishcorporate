import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getCategoryService,
  getCategoryIDService,
} from "../../services/categoryService";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getCategory = createAsyncThunk("category/FetchData", async () => {
  const res = await getCategoryService();
  return res.data.message;
});
export const getCategoryID = createAsyncThunk(
  "categoryID/FetchData",
  async (category) => {
    const res = await getCategoryIDService(category);
    return res.data.message.posts;
  },
);

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    add: (state) => {
      state.loading = true;
    },
    cleanError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getCategoryID.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoryID.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getCategoryID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { add, cleanError } = categorySlice.actions;
export default categorySlice.reducer;
