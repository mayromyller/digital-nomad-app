import { useFetchData } from '@/src/data/use-fetch-data'

import { useRepository } from '@/src/infra/repositories/repository-provider'
import type { CityFilter } from '../city'

export function useCityFindAll(filters: CityFilter) {
	const { city } = useRepository()

	return useFetchData(
		() => city.finAll(filters),
		[filters.name, filters.categoryId]
	)
}
