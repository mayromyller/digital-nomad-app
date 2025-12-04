import type { Category } from '../category/category'

export type CityFilter = {
	name?: string
	categoryId?: string | null
}

export type TouristAttraction = {
	id: string
	name: string
	description: string
	cityId: string
}

export type City = {
	id: string
	name: string
	country: string
	coverImage: number | string
	description: string
	touristAttractions: TouristAttraction[]
	location: {
		latitude: number
		longitude: number
	}
	categories: Category[]
	// relatedCitiesIds: string[]
}

export type CityPreview = Pick<City, 'id' | 'name' | 'country' | 'coverImage'>
