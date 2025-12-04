import type { Repositories } from '@/src/domain/repositories'
import { InMemoryCityRepository } from './in-memory-city-repository'

export const InMemoryRepository: Repositories = {
	city: new InMemoryCityRepository()
}
