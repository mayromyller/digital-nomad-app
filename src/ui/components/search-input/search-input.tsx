import { useAppTheme } from '@/src/ui/theme/use-app-theme'
import { useState } from 'react'
import { TextInput, type TextInputProps } from 'react-native'
import { Box, type BoxProps } from '../box/box'
import { IconButton } from '../icon-button/icon-button'

type SearchInputProps = {} & Pick<
	TextInputProps,
	'value' | 'onChangeText' | 'placeholder'
>

export function SearchInput({
	value,
	onChangeText,
	placeholder
}: SearchInputProps) {
	const [isFocused, setIsFocused] = useState(false)

	const { colors, textVariants } = useAppTheme()

	function onPressIconButton() {
		if (value && value.length > 0) {
			onChangeText?.('')
		}
	}

	return (
		<Box
			{...boxStyle}
			style={{
				borderColor: isFocused ? colors.primary : colors.gray1
			}}
		>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				placeholderTextColor={colors.gray2}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				style={{
					...textVariants.title16,
					color: colors.text,
					height: '100%',
					width: '100%',
					flexShrink: 1
				}}
			/>
			<IconButton
				iconName={value && value.length > 0 ? 'Close' : 'Search-outline'}
				onPress={onPressIconButton}
			/>
		</Box>
	)
}

const boxStyle: BoxProps = {
	flexDirection: 'row',
	alignItems: 'center',
	padding: 's8',
	justifyContent: 'space-between',
	backgroundColor: 'gray1',
	height: 70,
	borderRadius: 'full',
	borderWidth: 2,
	paddingLeft: 's16'
}
