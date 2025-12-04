import { supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './use-fetch-data'

export function useCityDetails(id: string) {
	return useFetchData(() => supabaseService.findById(id))
}
