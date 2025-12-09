import { Pressable, type PressableProps } from 'react-native'
import { Box, type BoxProps } from '../box/box'
import { Icon, type IconName } from '../icons/icons'
import { Text } from '../text/text'

export type PillProps = {
	label: string
	iconName: IconName
	active: boolean
	onPress?: PressableProps['onPress']
}

/**
 *  The height of the pill is the sum of the icon height, the text height, and the border height.
 *  This is used to calculate marginTop of the pill to center vertically.
 */
export const PILL_HEIGHT = 16 + 16 + 4

export function Pill({ label, iconName, active, onPress }: PillProps) {
	return (
		<Pressable onPress={onPress}>
			<Box {...boxStyles} backgroundColor={active ? 'gray1' : 'transparent'}>
				<Icon name={iconName} color={active ? 'primary' : 'gray2'} />
				<Text ml="s4" variant="text12">
					{label}
				</Text>
			</Box>
		</Pressable>
	)
}

const boxStyles: BoxProps = {
	flexDirection: 'row',
	alignItems: 'center',
	borderWidth: 2,
	borderRadius: 'full',
	borderColor: 'gray1',
	paddingVertical: 's8',
	paddingHorizontal: 's12'
}
