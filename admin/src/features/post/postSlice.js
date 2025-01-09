import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addPostService,
  deletePostService,
  getPostService,
  editPostService,
  getPostByIDService,
} from "../../services/postService";
import { AxiosError } from "axios";
import {
  addCommentService,
  deleteCommentService,
} from "@/services/commentService";

const initialState = {
  data: [],
  dataID: {},
  loading: false,
  error: null,
};

export const getPost = createAsyncThunk("post/FetchData", async () => {
  const res = await getPostService();
  return res.data.message;
});
export const getPostID = createAsyncThunk("postID/FetchData", async (id) => {
  const res = await getPostByIDService(id);
  return res.data.message;
});

export const addComment = createAsyncThunk(
  "comment/create",
  async (comment, { rejectWithValue }) => {
    try {
      const res = await addCommentService(comment);

      return res.data.message;
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === 400
      ) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);
export const addPost = createAsyncThunk(
  "post/create",
  async (post, { rejectWithValue }) => {
    try {
      const res = await addPostService(post);
      return res.data.message;
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === 400
      ) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const editPost = createAsyncThunk(
  "post/EditData",
  async ({ id, post }, { rejectWithValue }) => {
    try {
      const res = await editPostService(id, post);
      return res.data.message;
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === 400
      ) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const deletePost = createAsyncThunk(
  "post/DeleteData",
  async (postId, { rejectWithValue }) => {
    try {
      const res = await deletePostService(postId);
      return res.data;
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === 404
      ) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const deleteComment = createAsyncThunk(
  "comment/DeleteData",
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteCommentService(id);
      return res.data;
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === 404
      ) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    add: (state) => {
      state.error = null;
      state.loading = true;
    },
    cleanError: (state) => {
      state.error = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(addPost.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getPost.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getPostID.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getPostID.fulfilled, (state, action) => {
      state.loading = false;
      state.dataID = action.payload;
    });
    builder.addCase(getPostID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editPost.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id,
      );
      if (index !== -1) state.data[index] = action.payload;
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deletePost.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item.id !== action.meta.arg);
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addComment.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data.comments.push(action.payload);
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteComment.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.dataID.comments = state.dataID.comments.filter(
        (item) => item.id !== action.meta.arg,
      );
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { add, cleanError } = postSlice.actions;
export default postSlice.reducer;
