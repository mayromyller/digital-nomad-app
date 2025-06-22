import { ScrollView } from 'react-native'

import { Box } from '@/src/components/box/box'
import { CategoryPill } from '@/src/components/category-pill/category-pill'
import { SearchInput } from '@/src/components/search-input/search-input'
import type { Category } from '@/src/types'

type CityFilterProps = {
	categories: Category[]
	cityName: string
	onCityNameChange: (cityName: string) => void
	selectedCategoryId: string | null
	onCategorySelectChange: (id: string | null) => void
}

export function CityFilter({
	categories,
	cityName,
	onCityNameChange,
	selectedCategoryId,
	onCategorySelectChange
}: CityFilterProps) {
	return (
		<Box>
			<Box paddingHorizontal="padding">
				<SearchInput
					value={cityName}
					onChangeText={onCityNameChange}
					placeholder="Qual seu próximo destino?"
				/>
			</Box>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal>
				<Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
					{categories.map((category) => (
						<CategoryPill
							key={category.id}
							category={category}
							active={selectedCategoryId === category.id}
							onPress={() =>
								onCategorySelectChange(
									category.id === selectedCategoryId ? null : category.id
								)
							}
						/>
					))}
				</Box>
			</ScrollView>
		</Box>
	)
}
