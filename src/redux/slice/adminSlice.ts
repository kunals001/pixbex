import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError } from "axios";

axios.defaults.withCredentials = true;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type User = {
    _id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
}

type ErrorPayload = string;

interface AdminState  {
    user: User | null,
    loading: boolean,
    isAuthenticated: boolean,
    isCheckingAuth: boolean,
    error: string | null,
}

const initialState: AdminState = {
    user: null,
    loading: false,
    isAuthenticated: false,
    isCheckingAuth: false,
    error: null,
}

export const login = createAsyncThunk<User, { email: string; password: string },{ rejectValue:ErrorPayload }>(
  'admin/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, data);
      return response.data.user;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message || 'Signup failed');
    }
  }
);

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
    clearError(state) {
      state.error = null;
    },
    },
    extraReducers: (builder) => {
        builder
          .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
          })
          .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Login failed';
          });
      },
});

export const { clearError } = adminSlice.actions;
export default adminSlice.reducer;

