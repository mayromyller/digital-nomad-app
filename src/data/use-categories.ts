import { supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './use-fetch-data'

export function useCategories() {
	return useFetchData(() => supabaseService.listCategory())
}
