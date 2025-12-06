import type { CategoryRepository } from './category/category-repository'
import type { CityRepository } from './city/city-repository'

export type Repositories = {
	city: CityRepository
	category: CategoryRepository
}
