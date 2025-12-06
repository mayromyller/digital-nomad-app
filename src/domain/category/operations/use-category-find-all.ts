import { useFetchData } from '@/src/data/use-fetch-data'
import { useRepository } from '@/src/infra/repositories/repository-provider'

export function useCategoryFindAll() {
	const { category } = useRepository()

	return useFetchData(() => category.findAll())
}
