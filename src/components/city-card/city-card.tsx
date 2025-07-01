import { Link } from 'expo-router'
import { ImageBackground, Pressable } from 'react-native'

import type { CityPreview } from '@/src/types'

import { useAppTheme } from '@/src/theme/use-app-theme'
import { Box } from '../box/box'
import { Icon } from '../icons/icons'
import { Text } from '../text/text'

type CityCardProps = {
	cityPreview: CityPreview
}

export function CityCard({ cityPreview }: CityCardProps) {
	const { borderRadii } = useAppTheme()

	return (
		<Link href={`/city-details/${cityPreview.id}`} asChild>
			<Pressable>
				<ImageBackground
					source={cityPreview.coverImage}
					style={{ width: '100%', height: 280 }}
					imageStyle={{ borderRadius: borderRadii.default }}
				>
					<Box
						width="100%"
						height="100%"
						backgroundColor="midnightBlack"
						opacity={0.35}
						position="absolute"
						pointerEvents="none"
					/>
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
