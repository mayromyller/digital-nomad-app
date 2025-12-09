import type { Repositories } from '@/src/domain/repositories'

import { SupabaseCategoryRepository } from './supabase-category-repository'
import { SupabaseCityRepository } from './supabase-city-repository'

export const SupabaseRepositories: Repositories = {
	city: SupabaseCityRepository,
	category: SupabaseCategoryRepository
}
