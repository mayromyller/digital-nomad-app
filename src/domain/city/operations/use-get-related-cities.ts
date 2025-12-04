import { useFetchData } from '@/src/data/use-fetch-data'
import { useRepository } from '@/src/infra/repositories/repository-provider'

export function useGetRelatedCities(id: string) {
	const { city } = useRepository()

	return useFetchData(() => city.getRelatedCities(id))
}
