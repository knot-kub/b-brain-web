'use client'

import { useMemo } from 'react'
import { useAuthStore } from './stores/auth.store'

interface AuthValidators {
  email: Validator<string>
  password: Validator<string>
}

type Validator<T> = (input: T) => string

export const useAuth = () => {
  const { state, login, logout } = useAuthStore()
  const isLogin = useMemo(() => !!state.profile, [state.profile])

  const validator: AuthValidators = {
    email: (email: string) => {
      console.log('🚀 ~ useAuth ~ email:', email)
      if (!email) {
        return 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        return 'Email is invalid (example: test@example.com)'
      }
      return ''
    },
    password: (password: string) => {
      console.log('🚀 ~ useAuth ~ password:', password)
      if (!password) {
        return 'Password is required'
      }
      return ''
    },
  }

  return { isLogin, login, logout, validator }
}
