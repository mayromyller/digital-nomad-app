import { supabaseService } from '../supabase/supabase-service'
import { useFetchData } from './useFetchData'

export function useCategories() {
	return useFetchData(() => supabaseService.listCategory())
}
