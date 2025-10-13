export interface LoginData {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  token: string;
}

export interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
}