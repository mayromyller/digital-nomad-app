import type { AuthUser } from './auth-user'

export interface AuthRepository {
	signIn(email: string, password: string): Promise<AuthUser>
	signOut(): Promise<void>
}
