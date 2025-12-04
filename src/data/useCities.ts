import { type CityFilter, supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './use-fetch-data'

export function useCities(filters: CityFilter) {
	return useFetchData(
		() => supabaseService.finAll(filters),
		[filters.name, filters.categoryId]
	)
}
s
