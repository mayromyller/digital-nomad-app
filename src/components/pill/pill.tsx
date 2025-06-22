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
