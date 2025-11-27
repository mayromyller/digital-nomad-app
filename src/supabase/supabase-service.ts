import type { CategoryCode, CityPreview } from '../types'
import { supabase } from './supabase'

const storageURL = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL

export type CityFilter = {
	name?: string
	categoryId?: string | null
}

async function finAll(filters: CityFilter): Promise<CityPreview[]> {
	try {
		const fields = 'id,name,country,cover_image'

		// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
		let cities
		if (filters.categoryId) {
			const { data } = await supabase
				.from('cities_with_categories')
				.select(fields)
				.eq('category_id', filters.categoryId)
				.ilike('name', `%${filters.name}%`)

			cities = data
		} else {
			const { data } = await supabase
				.from('cities')
				.select(fields)
				.ilike('name', `%${filters.name}%`)

			cities = data
		}

		if (!cities) {
			throw new Error('No data found')
		}

		return cities?.map(
			(row) =>
				({
					id: row.id,
					name: row.name,
					country: row.country,
					coverImage: `${storageURL}/${row.cover_image}`
				}) as CityPreview
		)
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error
	}
}

async function listCategory() {
	const { data, error } = await supabase.from('categories').select('*')

	if (error) {
		throw new Error('error trying to list categories')
	}

	return data.map((row) => ({
		id: row.id,
		description: row.description,
		name: row.name,
		code: row.code as CategoryCode
	}))
}

export const supabaseService = {
	finAll,
	listCategory
}
