import { Box } from '../box/box'

export function BlackOpacity() {
	return (
		<Box
			width="100%"
			height="100%"
			backgroundColor="midnightBlack"
			opacity={0.35}
			position="absolute"
			pointerEvents="none"
		/>
	)
}
