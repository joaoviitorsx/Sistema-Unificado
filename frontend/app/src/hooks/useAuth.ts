import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginUser, logout, loadUserFromStorage } from "../store/slices/authSlice";
import type { LoginData } from "../types/auth";

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector(s => s.auth);

  return {
    user, status, error,
    login: (data: LoginData) => dispatch(loginUser(data)),
    logout: () => dispatch(logout()),
    loadUserFromStorage: () => dispatch(loadUserFromStorage()),
  };
}
