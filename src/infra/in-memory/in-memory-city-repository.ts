import { cities } from '@/src/data/cities'
import type { City, CityFilter, CityPreview } from '@/src/domain/city/city'
import type { CityRepository } from '@/src/domain/city/city-repository'

export class InMemoryCityRepository implements CityRepository {
	async finAll(filters: CityFilter): Promise<CityPreview[]> {
		return cities
	}
	findById(id: string): Promise<City> {
		throw new Error('Method not implemented.')
	}
	getRelatedCities(cityId: string): Promise<CityPreview[]> {
		throw new Error('Method not implemented.')
	}
}
