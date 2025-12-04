import { useFetchData } from '@/src/data/use-fetch-data'

import type { CityFilter } from '../city'
import type { CityRepository } from '../city-repository'

export function useCityFindAll(
	filters: CityFilter,
	repository: CityRepository
) {
	return useFetchData(
		() => repository.finAll(filters),
		[filters.name, filters.categoryId]
	)
}
