import { FlatList, type ListRenderItemInfo } from 'react-native'

import { CityCard } from '@/src/components/city-card/city-card'
import { Screen } from '@/src/components/screen/screen'
import { CityFilter } from '@/src/containers/city-filter/city-filter'
import { cities } from '@/src/data/cities'
import { useAppTheme } from '@/src/theme/use-app-theme'
import type { CityPreview } from '@/src/types'
import { useScrollToTop } from '@react-navigation/native'
import { useRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeScreen() {
	const { spacing } = useAppTheme()
	const { top, bottom } = useSafeAreaInsets()
	const _paddingTop = top + spacing.s16

	const flatListRef = useRef(null)
	useScrollToTop(flatListRef)

	function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
		return <CityCard cityPreview={item} />
	}

	return (
		<Screen flex={1}>
			<FlatList
				ref={flatListRef}
				contentContainerStyle={{
					gap: spacing.padding,
					paddingTop: _paddingTop,
					paddingBottom: bottom
				}}
				data={cities}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={<CityFilter />}
			/>
		</Screen>
	)
}
