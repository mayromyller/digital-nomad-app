import type { Repositories } from '@/src/domain/repositories'

import { InMemoryAuthRepository } from './in-memory-auth-repository'
import { InMemoryCategoryRepository } from './in-memory-category-repository'
import { InMemoryCityRepository } from './in-memory-city-repository'

export const InMemoryRepository: Repositories = {
	auth: new InMemoryAuthRepository(),
	city: new InMemoryCityRepository(),
	category: new InMemoryCategoryRepository()
}
