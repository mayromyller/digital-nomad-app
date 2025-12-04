import { supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './use-fetch-data'

export function useRelatedCities(id: string) {
	return useFetchData(() => supabaseService.getRelatedCities(id))
}
