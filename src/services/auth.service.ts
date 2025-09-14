import { AxiosInstance } from 'axios'
import { BaseService } from './base.service'
import { LoginResponse } from '@/models/login.response.model'

export class AuthService extends BaseService {
  constructor(private readonly axios: AxiosInstance) {
    super()
  }

  private baseUrl: string = '/api/v1/auth'

  public async login(email: string, password: string): Promise<LoginResponse> {
    const response = await this.axios.post(this.baseUrl + '/login', {
      email,
      password,
    })
    return this.getResult(response.data, LoginResponse)
  }
}
