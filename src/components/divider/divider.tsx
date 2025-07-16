import { Box, type BoxProps } from '../box/box'

export function Divider(props: BoxProps) {
	return (
		<Box marginVertical="s24" {...props}>
			<Box alignSelf="center" width="100%" height={1} backgroundColor="gray1" />
		</Box>
	)
}
