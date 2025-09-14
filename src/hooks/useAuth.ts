"use client";

import { useMemo } from "react";
import { useAuthStore } from "./stores/auth.store";

export const useAuth = () => {
  const { state, login, logout } = useAuthStore();
  const isLogin = useMemo(() => !!state.profile, [state.profile]);

  return { isLogin, login, logout };
};
