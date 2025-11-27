import { useEffect, useState } from 'react'
import { supabaseService } from '../supabase/supabase-service'
import type { City } from '../types'

type UseCityDetailsReturn = {
	city?: City
	isLoading: boolean
	error: unknown
}

export function useCityDetails(id: string): UseCityDetailsReturn {
	const [city, setCity] = useState<City>()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<unknown>(null)

	async function fetchData() {
		try {
			setIsLoading(true)
			const cities = await supabaseService.findById(id)

			setCity(cities)
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false)
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchData()
	}, [])

	return {
		city,
		isLoading,
		error
	}
}
