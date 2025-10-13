import type { LoginData, User } from "../types/auth";

export const authService = {
  async login(data: LoginData): Promise<User> {
    await new Promise((r) => setTimeout(r, 1000));
    if (data.username === "admin" && data.password === "123") {
      return {
        id: 1,
        username: "admin",
        token: "jwtTeste",
      };
    }
    throw new Error("Usuário ou senha incorretos");
  },
};
