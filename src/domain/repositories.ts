import type { AuthRepository } from './auth/auth-repository'
import type { CategoryRepository } from './category/category-repository'
import type { CityRepository } from './city/city-repository'

export type Repositories = {
	auth: AuthRepository
	city: CityRepository
	category: CategoryRepository
}
