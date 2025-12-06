import type { Category } from '@/src/domain/category/category'
import type { CategoryRepository } from '@/src/domain/category/category-repository'
import { categories } from '@/src/infra/repositories/adapters/in-memory/data/categories'

export class InMemoryCategoryRepository implements CategoryRepository {
	async findAll(): Promise<Category[]> {
		return categories
	}
}
