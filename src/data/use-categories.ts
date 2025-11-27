import { useEffect, useState } from 'react'
import { supabaseService } from '../supabase/supabase-service'
import type { Category } from '../types'

type UseCategoriesReturn = {
	categories: Category[]
	isLoading: boolean
	error: unknown
}

export function useCategories(): UseCategoriesReturn {
	const [categories, setCategories] = useState<Category[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<unknown>(null)

	async function fetchCategories() {
		try {
			setIsLoading(true)

			const categories = await supabaseService.listCategory()

			setCategories(categories)
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false)
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchCategories()
	}, [])

	return { categories, isLoading, error }
}
