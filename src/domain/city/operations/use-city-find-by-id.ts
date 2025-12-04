import { useFetchData } from '@/src/data/use-fetch-data'
import { useRepository } from '@/src/infra/repositories/repository-provider'

export function useCityFindById(id: string) {
	const { city } = useRepository()

	return useFetchData(() => city.findById(id))
}
