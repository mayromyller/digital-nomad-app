import { FlatList, type ListRenderItemInfo } from 'react-native'

import { Box } from '@/src/components/box/box'
import { CityCard } from '@/src/components/city-card/city-card'
import { Screen } from '@/src/components/screen/screen'
import { CityFilter } from '@/src/containers/city-filter/city-filter'
import { categories } from '@/src/data/categories'
import { useCities } from '@/src/data/useCities'
import { useDebounce } from '@/src/hooks/use-debounce'
import { useAppTheme } from '@/src/theme/use-app-theme'
import type { CityPreview } from '@/src/types'
import { useScrollToTop } from '@react-navigation/native'
import { useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeScreen() {
	const [cityName, setCityName] = useState('')
	const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
		null
	)

	const debouncedCityName = useDebounce(cityName)

	const { spacing } = useAppTheme()
	const { top, bottom } = useSafeAreaInsets()
	const _paddingTop = top + spacing.s16

	const { cityPreviewList } = useCities({
		name: debouncedCityName,
		categoryId: selectedCategoryId
	})

	const flatListRef = useRef(null)
	useScrollToTop(flatListRef)

	function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
		return (
			<Box paddingHorizontal="padding">
				<CityCard cityPreview={item} />
			</Box>
		)
	}

	return (
		<Screen flex={1} style={{ paddingHorizontal: 0 }}>
			<FlatList
				ref={flatListRef}
				contentContainerStyle={{
					gap: spacing.padding,
					paddingTop: _paddingTop,
					paddingBottom: bottom
				}}
				data={cityPreviewList}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={
					<CityFilter
						categories={categories}
						cityName={cityName}
						onCityNameChange={setCityName}
						selectedCategoryId={selectedCategoryId}
						onCategorySelectChange={setSelectedCategoryId}
					/>
				}
			/>
		</Screen>
	)
}
