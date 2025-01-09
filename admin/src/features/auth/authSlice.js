import {
  clearTokenService,
  loginService,
  refreshTokenService,
} from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosError } from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
  check: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginService(data);

      return res.data.message;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);
export const checkAuth = createAsyncThunk(
  "auth/check",
  async (_, { rejectWithValue }) => {
    try {
      const res = await refreshTokenService();

      return res.data.message;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);
export const LogoutAuth = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await clearTokenService();

      return res.data.message;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const authSlice = createSlice({
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
    builder.addCase(login.pending, (state) => {
      state.error = null;
      state.loading = true;
      state.check = false;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.error = null;
      state.loading = false;
      state.check = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.check = false;
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.error = null;
      state.loading = true;
      state.check = false;
    });
    builder.addCase(checkAuth.fulfilled, (state) => {
      state.error = null;
      state.loading = false;
      state.check = true;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.check = false;
    });
    builder.addCase(LogoutAuth.pending, (state) => {
      state.error = null;
      state.loading = true;
      state.check = false;
    });
    builder.addCase(LogoutAuth.fulfilled, (state) => {
      state.error = null;
      state.loading = false;
      state.check = false;
    });
    builder.addCase(LogoutAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.check = false;
    });
  },
});

export const { add, cleanError } = authSlice.actions;
export default authSlice.reducer;
