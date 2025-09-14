'use client'

import { useAuth } from '@/hooks'
import { createContext, useEffect } from 'react'

type AuthContextType = {
  isLogin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLogin } = useAuth()

  useEffect(() => {
    if (!isLogin) {
      //NOTE - Mock for passing login guard
      // if (false) {
      window.location.href = '/sign-in'
    }
  }, [isLogin])

  return (
    <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>
  )
}
