import React from 'react'

import { Icon } from '@/src/components/icons/icons'
import { useAppTheme } from '@/src/theme/use-app-theme'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	const { colors } = useAppTheme()

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.gray2,
				tabBarStyle: {
					backgroundColor: colors.background,
					paddingTop: 10,
					height: 90,
					borderTopWidth: 0
				},
				tabBarLabelStyle: {
					fontFamily: 'PoppinsRegular',
					fontSize: 12,
					color: colors.text
				}
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Início',
					tabBarIcon: ({ focused }) => (
						<Icon
							name={focused ? 'Home-fill' : 'Home-outline'}
							color={focused ? 'primary' : 'gray2'}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: 'Explorar',
					tabBarIcon: ({ focused }) => (
						<Icon name={'Explore'} color={focused ? 'primary' : 'gray2'} />
					)
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Perfil',
					tabBarIcon: ({ focused }) => (
						<Icon
							name={focused ? 'Person-fill' : 'Person-outline'}
							color={focused ? 'primary' : 'gray2'}
						/>
					)
				}}
			/>
		</Tabs>
	)
}
