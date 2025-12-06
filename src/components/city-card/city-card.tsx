import { Link } from 'expo-router'
import {
	ImageBackground,
	type ImageBackgroundProps,
	Pressable
} from 'react-native'

import type { CityPreview } from '@/src/domain/city/city'
import { useAppTheme } from '@/src/theme/use-app-theme'
import { BlackOpacity } from '../black-opacity/black-opacity'
import { Box } from '../box/box'
import { Icon } from '../icons/icons'
import { Text } from '../text/text'

type CityCardProps = {
	cityPreview: CityPreview
	style?: ImageBackgroundProps['style']
}

export function CityCard({ cityPreview, style }: CityCardProps) {
	const { borderRadii } = useAppTheme()

	return (
		<Link push href={`/city-details/${cityPreview.id}`} asChild>
			<Pressable>
				<ImageBackground
					source={
						typeof cityPreview.coverImage === 'number'
							? cityPreview.coverImage
							: { uri: cityPreview.coverImage }
					}
					style={[{ width: '100%', height: 280 }, style]}
					imageStyle={{ borderRadius: borderRadii.default }}
				>
					<BlackOpacity />
					<Box flex={1} padding="s24" justifyContent="space-between">
						<Box alignSelf="flex-end">
							<Icon name="Favorite-outline" color="text" />
						</Box>

						<Box>
							<Text variant="title22">{cityPreview.name}</Text>
							<Text variant="text16">{cityPreview.country}</Text>
						</Box>
					</Box>
				</ImageBackground>
			</Pressable>
		</Link>
	)
}
