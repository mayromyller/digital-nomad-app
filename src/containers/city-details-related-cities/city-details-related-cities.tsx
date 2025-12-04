import { Box } from '@/src/components/box/box'
import { CityCard } from '@/src/components/city-card/city-card'
import { Text } from '@/src/components/text/text'
import type { City } from '@/src/domain/city/city'
import { useGetRelatedCities } from '@/src/domain/city/operations/use-get-related-cities'
import { useAppTheme } from '@/src/theme/use-app-theme'
import { Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = Pick<City, 'id'>

const width = Dimensions.get('window').width

export function CityDetailsRelatedCities({ id }: Props) {
	const { data: cities } = useGetRelatedCities(id)

	const { spacing } = useAppTheme()
	const { bottom } = useSafeAreaInsets()

	const cardWidth = width * 0.7
	const cardHeight = cardWidth * 0.9

	return (
		<Box style={{ marginBottom: bottom }}>
			<Text variant="title22" mb="s16" paddingHorizontal="padding">
				Veja também
			</Text>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: spacing.padding,
					gap: spacing.s16
				}}
			>
				{cities?.map((city) => (
					<CityCard
						key={city.id}
						cityPreview={city}
						style={{ width: cardWidth, height: cardHeight }}
					/>
				))}
			</ScrollView>
		</Box>
	)
}
