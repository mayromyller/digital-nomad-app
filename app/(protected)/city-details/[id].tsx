import { useLocalSearchParams } from 'expo-router'

import { Divider } from '@/src/components/divider/divider'
import { Screen } from '@/src/components/screen/screen'
import { Text } from '@/src/components/text/text'
import { CityDetailsHeader } from '@/src/containers/city-details-header/city-details-header'
import { CityDetailsInfo } from '@/src/containers/city-details-info/city-details-info'
import { CityDetailsMap } from '@/src/containers/city-details-map/city-details-map'
import { CityDetailsRelatedCities } from '@/src/containers/city-details-related-cities/city-details-related-cities'
import { CityDetailsTouristAttraction } from '@/src/containers/city-details-tourist-attraction/city-details-tourist-attraction'
import { useCityDetails } from '@/src/data/use-cities-details'

export default function CityDetails() {
	const { id } = useLocalSearchParams<{ id: string }>()

	const cityDetails = useCityDetails(id)

	if (!cityDetails) {
		return (
			<Screen alignItems="center" justifyContent="center">
				<Text>City not found</Text>
			</Screen>
		)
	}

	return (
		<Screen style={{ paddingHorizontal: 0 }} scrollable>
			<CityDetailsHeader
				id={cityDetails.id}
				categories={cityDetails.categories}
				coverImage={cityDetails.coverImage}
			/>
			<CityDetailsInfo
				name={cityDetails.name}
				description={cityDetails.description}
				country={cityDetails.country}
			/>
			<Divider paddingHorizontal="padding" />
			<CityDetailsTouristAttraction
				touristAttractions={cityDetails.touristAttractions}
			/>
			<Divider paddingHorizontal="padding" />
			<CityDetailsMap />

			<Divider paddingHorizontal="padding" />
			<CityDetailsRelatedCities />
		</Screen>
	)
}
