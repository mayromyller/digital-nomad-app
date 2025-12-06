import { Box } from '@/src/components/box/box'
import { Text } from '@/src/components/text/text'
import type { City } from '@/src/domain/city/city'

type CityDetailsInfoProps = Pick<City, 'name' | 'country' | 'description'>

export function CityDetailsInfo({
	name,
	country,
	description
}: CityDetailsInfoProps) {
	return (
		<Box padding="padding">
			<Text variant="title28" mb="s2">
				{name}
			</Text>
			<Text variant="text18" mb="s24">
				{country}
			</Text>
			<Text variant="text14">{description}</Text>
		</Box>
	)
}
