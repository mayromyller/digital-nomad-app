import { Pressable, StyleSheet, View } from 'react-native'

import theme from '@/src/theme/theme'

import { useAppTheme } from '@/src/theme/use-app-theme'
import Animated, {
	interpolate,
	interpolateColor,
	type SharedValue,
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'
import { Box } from '../box/box'
import { Text } from '../text/text'

type AccordionProps = {
	title: string
	description: string
}

export function Accordion({ title, description }: AccordionProps) {
	const isOpen = useSharedValue(false)
	const progress = useSharedValue(0)

	function handleOpenPress() {
		isOpen.value = !isOpen.value
		progress.value = withTiming(isOpen.value ? 0 : 1, { duration: 400 })
	}

	return (
		<Pressable onPress={handleOpenPress}>
			<View>
				<AccordionHeader title={title} progress={progress} />
				<AccordionBody
					description={description}
					isOpen={isOpen}
					progress={progress}
				/>
			</View>
		</Pressable>
	)
}

function AccordionHeader({
	title,
	progress
}: { title: string; progress: SharedValue<number> }) {
	const { colors, borderRadii } = useAppTheme()

	const animatedStyle = useAnimatedStyle(() => {
		return {
			tintColor: interpolateColor(
				progress.value,
				[0, 1],
				[colors.gray2, colors.primary]
			),
			transform: [
				{
					rotate: `${interpolate(progress.value, [0, 1], [0, -180])}deg`
				}
			]
		}
	})

	const animatedHeaderStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				progress.value,
				[0, 1],
				[colors.transparent, colors.gray1]
			),
			borderBottomLeftRadius: interpolate(
				progress.value,
				[0, 1],
				[borderRadii.default, 0]
			),
			borderBottomRightRadius: interpolate(
				progress.value,
				[0, 1],
				[borderRadii.default, 0]
			)
		}
	})

	return (
		<Animated.View style={[animatedHeaderStyle, styles.header]}>
			<Box flexShrink={1}>
				<Text variant="title16">{title}</Text>
			</Box>
			<Animated.Image
				source={require('@/assets/images/chevron-down.png')}
				style={[
					animatedStyle,
					{
						width: 24,
						height: 24
					}
				]}
			/>
		</Animated.View>
	)
}

function AccordionBody({
	description,
	isOpen,
	progress
}: {
	description: string
	isOpen: SharedValue<boolean>
	progress: SharedValue<number>
}) {
	const { borderRadii } = useAppTheme()
	const height = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(progress.value, [0, 1], [0, 1]),
			height: interpolate(progress.value, [0, 1], [0, height.value]),
			borderTopLeftRadius: interpolate(
				progress.value,
				[0, 1],
				[borderRadii.default, 0]
			),
			borderTopRightRadius: interpolate(
				progress.value,
				[0, 1],
				[borderRadii.default, 0]
			)
		}
	})

	return (
		<Animated.View style={[animatedStyle, { overflow: 'hidden' }]}>
			<View
				onLayout={(e) => {
					height.value = e.nativeEvent.layout.height
				}}
				style={styles.body}
			>
				<Text>{description}</Text>
			</View>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,

		borderWidth: 2,
		borderColor: theme.colors.gray1,
		borderRadius: theme.borderRadii.default
	},
	body: {
		position: 'absolute',
		paddingHorizontal: 16,
		paddingBottom: 16,
		backgroundColor: theme.colors.gray1,
		borderBottomLeftRadius: theme.borderRadii.default,
		borderBottomRightRadius: theme.borderRadii.default
	}
})
