import { useLocalSearchParams } from 'expo-router'

import { useCityFindById } from '@/src/domain/city/operations/use-city-find-by-id'
import { Divider } from '@/src/ui/components/divider/divider'
import { Screen } from '@/src/ui/components/screen/screen'
import { Text } from '@/src/ui/components/text/text'
import { BottomSheetMap } from '@/src/ui/containers/bottom-sheet-map/bottom-sheet-map'
import { CityDetailsHeader } from '@/src/ui/containers/city-details-header/city-details-header'
import { CityDetailsInfo } from '@/src/ui/containers/city-details-info/city-details-info'
import { CityDetailsMap } from '@/src/ui/containers/city-details-map/city-details-map'
import { CityDetailsRelatedCities } from '@/src/ui/containers/city-details-related-cities/city-details-related-cities'
import { CityDetailsTouristAttraction } from '@/src/ui/containers/city-details-tourist-attraction/city-details-tourist-attraction'
import { Pressable } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

export default function city() {
	const { id } = useLocalSearchParams<{ id: string }>()

	const { data: city } = useCityFindById(id)

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
