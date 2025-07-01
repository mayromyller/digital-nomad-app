import { router } from 'expo-router'
import { ImageBackground, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Box } from '@/src/components/box/box'
import { CategoryPill } from '@/src/components/category-pill/category-pill'
import { IconButton } from '@/src/components/icon-button/icon-button'
import { Icon } from '@/src/components/icons/icons'
import { PILL_HEIGHT } from '@/src/components/pill/pill'
import type { City } from '@/src/types'

type CityDetailsHeaderProps = Pick<City, 'id' | 'categories' | 'coverImage'>

export function CityDetailsHeader({
	id,
	categories,
	coverImage
}: CityDetailsHeaderProps) {
	const { top } = useSafeAreaInsets()

	return (
		<Box>
			<ImageBackground
				source={coverImage}
				style={{
					width: '100%',
					height: 250
				}}
				imageStyle={{
					borderBottomRightRadius: 40
				}}
			>
				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					style={{ paddingTop: top }}
					padding="padding"
				>
					<IconButton iconName="Chevron-left" onPress={router.back} />
					<Icon name="Favorite-outline" size={30} color="pureWhite" />
				</Box>
			</ImageBackground>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ marginTop: -PILL_HEIGHT / 2 }}
			>
				<Box flexDirection="row" gap="s8" paddingHorizontal="padding">
					{categories.map((category) => (
						<CategoryPill active={true} key={category.id} category={category} />
					))}
				</Box>
			</ScrollView>
		</Box>
	)
}
