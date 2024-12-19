import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {} from "../../services/commentService";
import { AxiosError } from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

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
        error.response.status === 409
      ) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const commentSlice = createSlice({
  name: "comment",
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
    builder.addCase(addComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { add, cleanError } = commentSlice.actions;
export default commentSlice.reducer;
