import { FlatList, type ListRenderItemInfo } from 'react-native'

import { CityCard } from '@/src/components/city-card/city-card'
import { Screen } from '@/src/components/screen/screen'
import { cities } from '@/src/data/cities'
import type { CityPreview } from '@/src/types'

export default function HomeScreen() {
	function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
		return <CityCard cityPreview={item} />
	}

	return (
		<Screen flex={1}>
			<FlatList data={cities} renderItem={renderItem} />
		</Screen>
	)
}
