import { useEffect, useState } from 'react'
import { type CityFilter, supabaseService } from '../supabase/supabase-service'
import type { CityPreview } from '../types'

type UseCitiesReturn = {
	cities?: CityPreview[]
	isLoading: boolean
	error: unknown
}

export function useCities(filters: CityFilter): UseCitiesReturn {
	const [cities, setCities] = useState<CityPreview[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<unknown>(null)

	async function fetchCities() {
		try {
			setIsLoading(true)
			const data = await supabaseService.finAll(filters)
			console.log('Fetched cities:', data[0].coverImage)
			setCities(data)
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false)
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchCities()
	}, [filters.name, filters.categoryId])

	return { cities, isLoading, error }
}
