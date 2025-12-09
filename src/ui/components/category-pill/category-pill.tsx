import type { Category, CategoryCode } from '@/src/domain/category/category'
import type { IconName } from '../icons/icons'
import { Pill, type PillProps } from '../pill/pill'

type CategoryPillProps = {
	category: Category
} & Pick<PillProps, 'active' | 'onPress'>

export function CategoryPill({ category, ...pillProps }: CategoryPillProps) {
	return (
		<Pill
			iconName={categoryIconMap[category.code]}
			label={category.name}
			{...pillProps}
		/>
	)
}

const categoryIconMap: Record<CategoryCode, IconName> = {
	ADVENTURE: 'Adventure',
	BEACH: 'Beach',
	CULTURE: 'Culture',
	GASTRONOMY: 'Gastronomy',
	HISTORY: 'History',
	LUXURY: 'Luxury',
	NATURE: 'Nature',
	URBAN: 'Urban',
	SHOPPING: 'Shopping',
	FAVORITE: 'Star'
}
