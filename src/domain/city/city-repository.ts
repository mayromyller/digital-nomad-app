import type { City, CityFilter, CityPreview } from './city'

export interface CityRepository {
	finAll(filters: CityFilter): Promise<CityPreview[]>
	findById(id: string): Promise<City>
	getRelatedCities(cityId: string): Promise<CityPreview[]>
}
