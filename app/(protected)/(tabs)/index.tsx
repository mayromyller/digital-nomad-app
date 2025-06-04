import { Box } from '@/src/components/box/box'
import { Text } from '@/src/components/text/text'
import { useAppTheme } from '@/src/theme/use-app-theme'

export default function HomeScreen() {
	const { colors } = useAppTheme()
	return (
		<Box flex={1} backgroundColor="mainBackground">
			<Text marginTop="xl" color="text">
				Home Screen {colors.text}
			</Text>
		</Box>
	)
}
