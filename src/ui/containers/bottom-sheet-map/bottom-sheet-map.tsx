import { useWindowDimensions } from 'react-native'
import MapView from 'react-native-maps'

import type { City } from '@/src/domain/city/city'
import {
	BottomSheet,
	type BottomSheetProps
} from '@/src/ui/components/bottom-sheeet/bottom-sheeet'
import { Box } from '@/src/ui/components/box/box'
import { IconButton } from '@/src/ui/components/icon-button/icon-button'
import { useAppTheme } from '@/src/ui/theme/use-app-theme'

type BottomSheetMapProps = {
	location: City['location']
} & BottomSheetProps

export function BottomSheetMap({
	location,
	...bottomSheetProps
}: BottomSheetMapProps) {
	const { height } = useWindowDimensions()
	const { spacing, borderRadii } = useAppTheme()

	return (
		<BottomSheet {...bottomSheetProps}>
			<MapView
				style={{
					width: '100%',
					height: height * 0.7,
					borderRadius: borderRadii.default
				}}
				initialRegion={{
					latitude: location.latitude,
					longitude: location.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			/>

			<Box position="absolute" top={spacing.padding} right={spacing.padding}>
				<IconButton iconName="Close" onPress={bottomSheetProps.onPress} />
			</Box>
		</BottomSheet>
	)
}
