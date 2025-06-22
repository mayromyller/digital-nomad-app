import type { PropsWithChildren } from 'react'
import { Box, type BoxProps } from '../box/box'

export function Screen({
	children,
	...boxProps
}: PropsWithChildren & BoxProps) {
	return (
		<Box
			flex={1}
			backgroundColor="background"
			paddingHorizontal="padding"
			{...boxProps}
		>
			{children}
		</Box>
	)
}
