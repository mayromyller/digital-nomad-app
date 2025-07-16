import type { PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'
import { Box, type BoxProps } from '../box/box'

export function Screen({
	children,
	scrollable = false,
	...boxProps
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) {
	const Container = scrollable ? ScrollView : View

	return (
		<Box
			flex={1}
			backgroundColor="background"
			paddingHorizontal="padding"
			{...boxProps}
		>
			<Container>{children}</Container>
		</Box>
	)
}
