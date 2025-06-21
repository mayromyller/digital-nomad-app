import { Pressable, type PressableProps } from 'react-native'

import { useAppTheme } from '@/src/theme/use-app-theme'

import { Box } from '../box/box'
import { Icon, type IconName } from '../icons/icons'

type IconButtonProps = {
	iconName: IconName
	onPress?: PressableProps['onPress']
}

export function IconButton({ iconName, onPress }: IconButtonProps) {
	const { boxShadows } = useAppTheme()

	return (
		<Pressable onPress={onPress}>
			<Box
				bg="primary"
				height={50}
				width={50}
				borderRadius="full"
				alignItems="center"
				justifyContent="center"
				style={{ boxShadow: boxShadows.primary }}
			>
				<Icon name={iconName} color="pureWhite" />
			</Box>
		</Pressable>
	)
}
