import type { Repositories } from '@/src/domain/repositories'

import { InMemoryAuthRepository } from '../in-memory/in-memory-auth-repository'
import { SupabaseCategoryRepository } from './supabase-category-repository'
import { SupabaseCityRepository } from './supabase-city-repository'

export const SupabaseRepositories: Repositories = {
	auth: new InMemoryAuthRepository(),
	city: SupabaseCityRepository,
	category: SupabaseCategoryRepository
}
