import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMailService,
  getMailIDService,
  deleteMailService,
} from "../../services/mailService";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getMail = createAsyncThunk("mail/FetchData", async () => {
  const res = await getMailService();
  return res.data.message;
});
export const getMailID = createAsyncThunk("mail/FetchDataID", async (mail) => {
  const res = await getMailIDService(mail);
  return res.data.message.posts;
});

export const deleteMail = createAsyncThunk(
  "mail/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteMailService(id);
      return res.data.message;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);
export const mailSlice = createSlice({
  name: "mail",
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
    builder.addCase(getMail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getMail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getMailID.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMailID.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getMailID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteMail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteMail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item.id !== action.meta.arg);
    });
    builder.addCase(deleteMail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { add, cleanError } = mailSlice.actions;
export default mailSlice.reducer;
