import 'react-native-reanimated'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { ThemeProvider } from '@shopify/restyle'

import theme from '@/src/theme/theme'

export default function RootLayout() {
	const [loaded] = useFonts({
		IcoMoon: require('../assets/icons/icomoon.ttf'),
		PoppinsBlack: require('../assets/fonts/Poppins-Black.ttf'),
		PoppinsBlackItalic: require('../assets/fonts/Poppins-BlackItalic.ttf'),
		PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
		PoppinsBoldItalic: require('../assets/fonts/Poppins-BoldItalic.ttf'),
		PoppinsExtraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
		PoppinsExtraBoldItalic: require('../assets/fonts/Poppins-ExtraBoldItalic.ttf'),
		PoppinsExtraLight: require('../assets/fonts/Poppins-ExtraLight.ttf'),
		PoppinsExtraLightItalic: require('../assets/fonts/Poppins-ExtraLightItalic.ttf'),
		PoppinsItalic: require('../assets/fonts/Poppins-Italic.ttf'),
		PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
		PoppinsLightItalic: require('../assets/fonts/Poppins-LightItalic.ttf'),
		PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
		PoppinsMediumItalic: require('../assets/fonts/Poppins-MediumItalic.ttf'),
		PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
		PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
		PoppinsSemiBoldItalic: require('../assets/fonts/Poppins-SemiBoldItalic.ttf'),
		PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf'),
		PoppinsThinItalic: require('../assets/fonts/Poppins-ThinItalic.ttf')
	})

	if (!loaded) {
		return null
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="light" />
			<Stack>
				<Stack.Screen name="(protected)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
				<Stack.Screen name="sign-in" />
			</Stack>
		</ThemeProvider>
	)
}
