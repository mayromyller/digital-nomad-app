
import { Category, CategoryCode } from '../domain/category/category'
import { City, CityPreview, TouristAttraction } from '../domain/city/city'
import type { Database } from './types'

export const storageURL = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL

type CityWithFullInfo =
	Database['public']['Views']['cities_with_full_info']['Row']
type CategoryRow = Database['public']['Tables']['categories']['Row']
type TouristAttractionRow =
	Database['public']['Tables']['tourist_attractions']['Row']

type CityPreviewRow = {
	id: string | null
	name: string | null
	country: string | null
	cover_image: string | null
}

function toCity(data: CityWithFullInfo): City {
	const categories = data.categories as CategoryRow[]
	const touristAttractions = data.tourist_attractions as TouristAttractionRow[]

	return {
		id: data.id as string,
		name: data.name as string,
		country: data.country as string,
		coverImage: `${storageURL}/${data.cover_image}`,
		description: data.description as string,
		categories: categories.map(toCategory),
		touristAttractions: touristAttractions.map(toTouristAttraction),
		location: {
			latitude: data.latitude as number,
			longitude: data.longitude as number
		}
	}
}

function toTouristAttraction(data: TouristAttractionRow): TouristAttraction {
	return {
		id: data.id,
		description: data.description,
		name: data.name,
		cityId: data.city_id as string
	}
}

function toCategory(data: CategoryRow): Category {
	return {
		id: data.id,
		description: data.description,
		name: data.name,
		code: data.code as CategoryCode
	}
}

function toCityPreview(row: CityPreviewRow): CityPreview {
	return {
		id: row.id,
		country: row.country,
		name: row.name,
		coverImage: `${storageURL}/${row.cover_image}`
	} as CityPreview
}

export const supabaseAdapter = {
	toCity,
	toCategory,
	toCityPreview,
	toTouristAttraction
}
