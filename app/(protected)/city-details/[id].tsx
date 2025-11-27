import { useLocalSearchParams } from 'expo-router'

import { Divider } from '@/src/components/divider/divider'
import { Screen } from '@/src/components/screen/screen'
import { Text } from '@/src/components/text/text'
import { BottomSheetMap } from '@/src/containers/bottom-sheet-map/bottom-sheet-map'
import { CityDetailsHeader } from '@/src/containers/city-details-header/city-details-header'
import { CityDetailsInfo } from '@/src/containers/city-details-info/city-details-info'
import { CityDetailsMap } from '@/src/containers/city-details-map/city-details-map'
import { CityDetailsRelatedCities } from '@/src/containers/city-details-related-cities/city-details-related-cities'
import { CityDetailsTouristAttraction } from '@/src/containers/city-details-tourist-attraction/city-details-tourist-attraction'
import { useCityDetails } from '@/src/data/use-cities-details'
import { Pressable } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

export default function city() {
	const { id } = useLocalSearchParams<{ id: string }>()

	const { data: city } = useCityDetails(id)

	const bottomSheetIsOpen = useSharedValue(false)

	function toggleBottomSheet() {
		bottomSheetIsOpen.value = !bottomSheetIsOpen.value
	}

	if (!city) {
		return (
			<Screen alignItems="center" justifyContent="center">
				<Text>City not found</Text>
			</Screen>
		)
	}

	return (
		<>
			<Screen style={{ paddingHorizontal: 0 }} scrollable>
				<CityDetailsHeader
					id={city.id}
					categories={city.categories}
					coverImage={city.coverImage}
				/>
				<CityDetailsInfo
					name={city.name}
					description={city.description}
					country={city.country}
				/>
				<Divider paddingHorizontal="padding" />
				<CityDetailsTouristAttraction
					touristAttractions={city.touristAttractions}
				/>
				<Divider paddingHorizontal="padding" />
				<Pressable onPress={toggleBottomSheet}>
					<CityDetailsMap location={city.location} />
				</Pressable>

				<Divider paddingHorizontal="padding" />
				<CityDetailsRelatedCities id={city.id} />
			</Screen>

			<BottomSheetMap
				location={city.location}
				isOpen={bottomSheetIsOpen}
				onPress={toggleBottomSheet}
			/>
		</>
	)
}
