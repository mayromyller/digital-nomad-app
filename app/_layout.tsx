import 'react-native-reanimated'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { ThemeProvider } from '@shopify/restyle'

import theme from '@/src/theme/theme'

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
	})

	if (!loaded) {
		return null
	}

	return (
		<ThemeProvider theme={theme}>
			<Stack>
				<StatusBar style="auto" />
				<Stack.Screen name="(protected)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
				<Stack.Screen name="sign-in" />
			</Stack>
		</ThemeProvider>
	)
}
