import { LinearGradient } from 'expo-linear-gradient'
import { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Text } from '../Text'

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#FFFFFF',
		fontSize: 20,
		fontWeight: 'bold'
	}
})

type ButtonProps = {
	children: string
	onPress?: () => void
}

export function Button({ children, onPress }: ButtonProps) {
	const { theme } = useContext(ThemeContext)

	return (
		<TouchableOpacity onPress={onPress}>
			<LinearGradient
				colors={theme.colors.secondaryGradient}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.container}
			>
				<Text style={styles.text}>{children}</Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}
