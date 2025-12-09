import type { City } from '@/src/domain/city/city'
import { Accordion } from '@/src/ui/components/accordion/accordion'
import { Box } from '@/src/ui/components/box/box'
import { Text } from '@/src/ui/components/text/text'

type Props = Pick<City, 'touristAttractions'>

export function CityDetailsTouristAttraction({ touristAttractions }: Props) {
	return (
		<Box padding="padding">
			<Text variant="title22" mb="s8">
				Pontos turísticos
			</Text>
			<Box gap="s8">
				{touristAttractions.map((attraction) => (
					<Accordion
						key={attraction.id}
						title={attraction.name}
						description={attraction.description}
					/>
				))}
			</Box>
		</Box>
	)
}
