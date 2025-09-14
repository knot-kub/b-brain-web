import { devtools } from 'zustand/middleware'
import { createWithEqualityFn } from 'zustand/traditional'
import { Profile } from '@/models/profile.model'
import { HttpClient } from '@/http/http.client'

const ACCESS_TOKEN_KEY: string = 'access_token'
const REFRESH_TOKEN_KEY: string = 'refresh_token'

export interface AuthState {
  profile?: Profile
}

export interface AuthStore {
  state: AuthState
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  getProfile?: () => Promise<void>
}

export const useAuthStore = createWithEqualityFn<AuthStore>()(
  devtools(
    () => ({
      state: {
        profile: undefined,
      },
      login: async (email: string, password: string) => {
        // const { auth } = HttpClient.instance.services()
        //NOTE - Mock response for testing login
        // const response = await auth.login(email, password);
        const response = {
          accessToken: 'mock_access_token',
          refreshToken: 'mock_refresh_token',
        }
        console.log('🚀 ~ response:', response)
        localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken)
        localStorage.setItem(REFRESH_TOKEN_KEY, response.refreshToken)
      },
      logout: () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY)
        localStorage.removeItem(REFRESH_TOKEN_KEY)
      },
      getProfile: async () => {
        const response = {
          id: '1',
          name: 'John Doe',
          email: 'mint@email.com',
        }
      },
    }),
    {
      name: 'auth-store',
    },
  ),
)
