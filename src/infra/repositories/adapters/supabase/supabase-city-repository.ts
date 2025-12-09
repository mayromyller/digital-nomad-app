import type { City, CityFilter, CityPreview } from '@/src/domain/city/city'
import type { CityRepository } from '@/src/domain/city/city-repository'

import { supabase } from './supabase'
import { storageURL, supabaseAdapter } from './supabase-adapter'

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

async function findById(id: string): Promise<City> {
	const { data, error } = await supabase
		.from('cities_with_full_info')
		.select('*')
		.eq('id', id)
		.single()

	if (error) {
		throw new Error('error trying to find city by id')
	}

	return supabaseAdapter.toCity(data)
}

async function getRelatedCities(cityId: string): Promise<CityPreview[]> {
	const { data, error } = await supabase
		.from('related_cities')
		.select('*')
		.eq('source_city_id', cityId)
		.throwOnError()

	return data.map(supabaseAdapter.toCityPreview)
}

export const SupabaseCityRepository: CityRepository = {
	finAll,
	findById,
	getRelatedCities
}
