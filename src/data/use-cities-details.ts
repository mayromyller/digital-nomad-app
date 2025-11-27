import { supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './useFetchData'

export function useCityDetails(id: string) {
	return useFetchData(() => supabaseService.findById(id))
}
