import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient'
import { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Text } from '../Text'
import { styles as BaseStyles } from './styles'

export function NavigationTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const { theme } = useContext(ThemeContext)
	const styles = BaseStyles()

	function getOptions(routeKey: string) {
		const { options } = descriptors[routeKey]
		return options
	}

	function getLabel(route: typeof state.routes[0]): string {
		const { tabBarLabel, title } = getOptions(route.key)
		if (tabBarLabel) return tabBarLabel as string
		if (title) return title as string
		return route.name
	}

	function isFocused(index: number) {
		return state.index === index
	}

	const onPress = (route: typeof state.routes[0], index: number) => {
		const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true })

		if (!isFocused(index) && !event.defaultPrevented) {
			navigation.navigate(route.name)
		}
	}

	const onLongPress = (route: typeof state.routes[0]) => {
		navigation.emit({ type: 'tabLongPress', target: route.key })
	}

	const isHomeActive = () => {
		const route = state.routes[state.index]
		return route.name === 'Home'
	}

	return (
		<LinearGradient colors={['transparent', '#F3F4F9']} style={styles.tabBarContainer}>
			{isHomeActive() && (
				<TouchableOpacity style={styles.clockInButtonContainer} onPress={() => null}>
					<LinearGradient
						style={styles.clockInButton}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						colors={theme.colors.secondaryGradient}
					>
						<Text style={styles.clockInButtonLabel}>Marcar Ponto</Text>
					</LinearGradient>
				</TouchableOpacity>
			)}
			<View style={styles.routesContainer}>
				{state.routes.map((route, index) => (
					<TouchableOpacity
						key={route.key}
						accessibilityRole="button"
						accessibilityLabel={getOptions(route.key).tabBarAccessibilityLabel}
						testID={getOptions(route.key).tabBarTestID}
						onPress={() => onPress(route, index)}
						onLongPress={() => onLongPress(route)}
						style={styles.routeButton}
					>
						<Text style={{ color: isFocused(index) ? '#673ab7' : '#222' }}>{getLabel(route)}</Text>
					</TouchableOpacity>
				))}
			</View>
		</LinearGradient>
	)
}
