import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import type { LoginData, User, AuthState } from "../../types/auth";
import { storage } from "../../utils/storage";

const initialState: AuthState = { 
  user: null, 
  status: "idle", 
  error: null 
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const user = await authService.login(data);
      return user;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.detail || "Usuário ou senha inválidos");
    }
  }
);

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      storage.remove("user");
    },
    loadUserFromStorage(state) {
      const saved = storage.get<User>("user");
      if (saved) state.user = saved;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => { state.status = "loading"; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        storage.set("user", action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "Erro no login";
      });
  }
});

export const { logout, loadUserFromStorage } = slice.actions;
export default slice.reducer;
