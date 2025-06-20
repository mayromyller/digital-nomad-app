import type { ThemeColors } from '@/src/theme/theme'
import { useAppTheme } from '@/src/theme/use-app-theme'
import createIconSetFromIcoMoon from '@expo/vector-icons/createIconSetFromIcoMoon'

const IcoMoon = createIconSetFromIcoMoon(
	require('../../../assets/icons/selection.json'),
	'IcoMoon',
	'icomoon.ttf'
)

export type IconProps = {
	name: IconName
	size?: number
	color?: ThemeColors
}

export function Icon({ name, size = 24, color = 'gray2' }: IconProps) {
	const { colors } = useAppTheme()

	return <IcoMoon name={name} size={size} color={colors[color]} />
}

export type IconName =
	| 'Adventure'
	| 'Beach'
	| 'Chevron-down'
	| 'Chevron-left'
	| 'Chevron-right'
	| 'Chevron-up'
	| 'Close'
	| 'Culture'
	| 'Explore'
	| 'Favorite-fill'
	| 'Favorite-outline'
	| 'Gastronomy'
	| 'Group'
	| 'History'
	| 'Home-fill'
	| 'Home-outline'
	| 'Luxury'
	| 'Nature'
	| 'Search-outline'
	| 'Shopping'
	| 'Star'
	| 'Urban'
	| 'Person-fill'
	| 'Person-outline'
	| 'Logout'
