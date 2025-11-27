import { supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './useFetchData'

export function useRelatedCities(id: string) {
	return useFetchData(() => supabaseService.getRelatedCities(id))
}
