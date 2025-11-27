import { type CityFilter, supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './useFetchData'

export function useCities(filters: CityFilter) {
	return useFetchData(() => supabaseService.finAll(filters))
}
