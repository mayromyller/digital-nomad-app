import { cities } from '@/src/data/cities'
import type { City, CityFilter, CityPreview } from '@/src/domain/city/city'
import type { CityRepository } from '@/src/domain/city/city-repository'

export class InMemoryCityRepository implements CityRepository {
	async finAll({ name, categoryId }: CityFilter): Promise<CityPreview[]> {
		let cityPreview = [...cities]

		if (name) {
			cityPreview = cityPreview.filter((city) =>
				city.name.toLowerCase().includes(name.toLowerCase())
			)
		}

		if (categoryId) {
			cityPreview = cityPreview.filter((city) => {
				return city.categories.some((category) => category.id === categoryId)
			})
		}

		return cityPreview
	}
	async findById(id: string): Promise<City> {
		const city = cities.find((city) => city.id === id)

		if (!city) {
			throw new Error('City not found')
		}

		return city
	}
	async getRelatedCities(cityId: string): Promise<CityPreview[]> {
		const city = cities.find((city) => city.id === cityId)

		return cities.filter((c) => city?.relatedCitiesIds.includes(c.id))
	}
}
