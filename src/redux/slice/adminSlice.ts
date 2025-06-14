import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

axios.defaults.withCredentials = true;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type User = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Post = {
  _id: string;
  title: string;
  desc: string;
  cate: string;
  video: string;
  tech: string;
  createdAt: string;
  updatedAt: string;
};

export type Contact = {
  _id: string;
  name: string;
  email: string;
  message: string;
  reason: string;
  createdAt: string;
  updatedAt: string;
};

export type Hire = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  description: string;
  referenceWebsite?: string;
  pages?: number;
  deadline?: string;
  budget?: string;
  preferredCommunication?: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
};

type ErrorPayload = string;

interface AdminState {
  user: User | null;
  contact: Contact[] | null;
  posts: Post[];
  hireRequests: Hire[],
  loading: boolean;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  error: string | null;
}

const initialState: AdminState = {
  user: null,
  contact: [],
  posts: [],
  hireRequests: [],
  loading: false,
  isAuthenticated: false,
  isCheckingAuth: false,
  error: null,
};

// === ASYNC THUNKS ===

export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: ErrorPayload }
>("admin/login", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, data);
    return response.data.user;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Login failed");
  }
});

export const checkAdminAuth = createAsyncThunk(
  'admin/checkAdminAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/check-auth`);
      return response.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Something went wrong");
    }
  }
);

export const contactus = createAsyncThunk<
  Contact,
  { name: string; email: string; message: string; reason: string },
  { rejectValue: ErrorPayload }
>("admin/contactus", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/contact`, data);
    return response.data.contact;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Contact failed");
  }
});

export const createPost = createAsyncThunk<
  Post,
  { title: string; desc: string; cate: string; video: string; tech: string },
  { rejectValue: ErrorPayload }
 >("admin/createPost", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/api/post/create-post`, data);
    return response.data.post;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Create post failed");
  }
});

export const getAllContact = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>("admin/getAllContact", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/get-all-contact`);
    return response.data.contact;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Get all contact failed");
  }
});

export const getAllPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>("admin/getAllPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/api/post/get-all-post`);
    return response.data.posts;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch posts");
  }
});

export const updatePost = createAsyncThunk<
  Post,
  { postId: string; updateData: Partial<Post> },
  { rejectValue: string }
>("admin/updatePost", async ({ postId, updateData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_URL}/api/post/update-post/${postId}`, updateData);
    return response.data.updatedPost;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to update post");
  }
});


export const deleteContact = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("admin/deleteContact", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/api/auth/delete-contact/${id}`);
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Delete contact failed");
  }
});


export const sendHireRequest = createAsyncThunk<
  Hire,
  {
    name: string;
    email: string;
    phone?: string;
    projectType: string;
    description: string;
    referenceWebsite?: string;
    pages?: string;
    deadline?: string;
    budget?: string;
    preferredCommunication?: string;
    message?: string;
  },
  { rejectValue: string }
>("admin/sendHireRequest", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/api/hire/send-hire`, data);
    return response.data.hire;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to send hire request");
  }
});

export const getAllHireRequests = createAsyncThunk<
  Hire[],
  void,
  { rejectValue: string }
>("admin/getAllHireRequests", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/api/hire/get-all-hire`);
    return response.data.hires;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to fetch hire requests");
  }
});

export const deleteHireRequest = createAsyncThunk<
  string, // returning deleted ID
  string, // input: ID
  { rejectValue: string }
>("admin/deleteHireRequest", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/api/hire/delete-hire/${id}`);
    return id; 
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return rejectWithValue(error.response?.data?.message || "Failed to delete hire request");
  }
});




// === SLICE ===

const adminSlice = createSlice({
  name: "admin",
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
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })

      .addCase(contactus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(contactus.fulfilled, (state, action) => {
        state.loading = false;
        if (state.contact) {
          state.contact.push(action.payload);
        } else {
          state.contact = [action.payload];
        }
      })
      .addCase(contactus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Contact failed";
      })

      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      // Optional: add new post to state.posts if needed
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      .addCase(getAllContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(getAllContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Get all contact failed";
      })
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch posts";
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPost = action.payload;
        state.posts = state.posts.map(post =>
          post._id === updatedPost._id ? updatedPost : post
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update post";
      })
      .addCase(checkAdminAuth.pending, (state) => {
        state.loading = true;
        state.isCheckingAuth = true;
        state.error = null;
      })
      .addCase(checkAdminAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isCheckingAuth = false;
        state.error = null;
      })
      .addCase(checkAdminAuth.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isCheckingAuth = false;
        state.error = action.payload as string;
      })
      .addCase(sendHireRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendHireRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendHireRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to send hire request";
      })
      .addCase(getAllHireRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllHireRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.hireRequests = action.payload;
      })
      .addCase(getAllHireRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch hire requests";
      })
      .addCase(deleteHireRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteHireRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.hireRequests = state.hireRequests.filter(hire => hire._id !== action.payload);
      })
      .addCase(deleteHireRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete hire request";
      })




  },
});

export const { clearError } = adminSlice.actions;
export default adminSlice.reducer;
