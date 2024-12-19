import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCategoryService,
  getCategoryIDService,
  postCategoryService,
  deleteCategoryService,
  putCategoryService,
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
  "category/FetchDataID",
  async (category) => {
    const res = await getCategoryIDService(category);
    return res.data.message.posts;
  },
);

export const addCategory = createAsyncThunk(
  "category/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postCategoryService(data);
      return res.data.message;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const editCategory = createAsyncThunk(
  "category/edit",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await putCategoryService(id, data);
      return res.data.message;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteCategoryService(id);
      return res.data.message;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
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
    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addCategory.rejected, (state, action) => {
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
    builder.addCase(deleteCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item.id !== action.meta.arg);
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(editCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(editCategory.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(
        (item) => item.id === action.meta.arg.id,
      );
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.meta.arg.data };
      }
    });

    builder.addCase(editCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { add, cleanError } = categorySlice.actions;
export default categorySlice.reducer;
