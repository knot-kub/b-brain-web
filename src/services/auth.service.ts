import { AxiosInstance } from 'axios'
import { BaseService } from './base.service'
import { LoginResponse } from '@/models/login.response.model'

export class AuthService extends BaseService {
  constructor(private readonly axios: AxiosInstance) {
    super()
  }

  private baseUrl: string = '/api/v1/auth/'

  public async login(username: string, password: string): Promise<LoginResponse> {
    const response = await this.axios.post(this.baseUrl +'/auth/login', { username, password })
    return this.getResult(response.data, LoginResponse)
  }
}
