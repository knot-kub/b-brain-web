import { AxiosInstance } from 'axios'
import { BaseService } from './base.service'
import { Profile } from '@/models/profile.model'

export class MeService extends BaseService {
  constructor(private readonly axios: AxiosInstance) {
    super()
  }

  private baseUrl: string = '/api/v1'

  public async profile(): Promise<Profile> {
    const response = await this.axios.get(this.baseUrl + '/me')

    return this.getResult(response.data, Profile)
  }
}
