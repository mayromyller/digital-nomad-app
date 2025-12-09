import type { AuthRepository } from '@/src/domain/auth/auth-repository'
import type { AuthUser } from '@/src/domain/auth/auth-user'
import { authUser } from './data/auth-user'

export class InMemoryAuthRepository implements AuthRepository {
	async signIn(email: string, password: string): Promise<AuthUser> {
		const user = authUser.find((u) => email === u.email)

		if (!user) {
			throw new Error('User not found')
		}

		return user
	}

	async signOut(): Promise<void> {
		//
	}
}
