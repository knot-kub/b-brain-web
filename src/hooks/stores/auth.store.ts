import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";
import { Profile } from "@/models/profile.model";
import { HttpClient } from "@/http/http.client";

const ACCESS_TOKEN_KEY: string = "access_token";
const REFRESH_TOKEN_KEY: string = "refresh_token";

export interface AuthState {
  profile?: Profile;
}

export interface AuthStore {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = createWithEqualityFn<AuthStore>()(
  devtools(
    () => ({
      state: {
        profile: undefined,
      },
      login: async (email: string, password: string) => {
        const { auth } = HttpClient.instance.services();
        const response = await auth.login(email, password);
        localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, response.refreshToken);
      },
      logout: () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
