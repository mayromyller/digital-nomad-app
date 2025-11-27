import type { CityPreview } from '../types'
import { cities } from './cities'

export function useRelatedCities(id: string): CityPreview[] {
	return cities.filter((city) => id.includes(city.id))
}
