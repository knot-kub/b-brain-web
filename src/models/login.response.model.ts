import { serializeAs } from 'cerialize';

export class LoginResponse {
    @serializeAs('accessToken')
    accessToken!: string

    @serializeAs('refreshToken')
    refreshToken!: string
}