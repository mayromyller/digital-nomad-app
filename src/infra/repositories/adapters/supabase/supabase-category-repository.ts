import type { CategoryCode } from '@/src/domain/category/category'
import type { CategoryRepository } from '@/src/domain/category/category-repository'
import { supabase } from './supabase'

async function findAll() {
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

export const SupabaseCategoryRepository: CategoryRepository = {
	findAll
}
