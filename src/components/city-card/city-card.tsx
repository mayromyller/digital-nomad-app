import { ImageBackground } from 'react-native'

import type { CityPreview } from '@/src/types'

import { Text } from '../text/text'

type CityCardProps = {
	cityPreview: CityPreview
}

export function CityCard({ cityPreview }: CityCardProps) {
	return (
		<ImageBackground
			source={cityPreview.coverImage}
			style={{ width: 200, height: 200 }}
		>
			<Text>{cityPreview.name}</Text>
			<Text>{cityPreview.country}</Text>
		</ImageBackground>
	)
}
