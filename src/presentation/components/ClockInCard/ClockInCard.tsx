import { LinearGradient } from 'expo-linear-gradient'
import { useContext } from 'react'
import { View, Text } from 'react-native'
import { ThemeContext } from '../../contexts/ThemeContext'
import { styles as BaseStyles } from './styles'

type ClockInCardProps = {
	day: string
	month: string
	hour: string
	location: string
	isCurrent?: boolean
}

export function ClockInCard({ day, month, hour, location, isCurrent }: ClockInCardProps) {
	const { theme } = useContext(ThemeContext)
	const styles = BaseStyles(theme, isCurrent)
	const notCurrentGradient = ['#FFFFFF', '#FFFFFF']

	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			colors={isCurrent ? theme.colors.primaryGradient : notCurrentGradient}
			style={styles.container}
		>
			<View style={styles.chip}>
				<Text style={styles.chipDay}>{day}</Text>
				<Text style={styles.chipMonth}>{month}</Text>
			</View>
			<View style={styles.details}>
				<Text style={styles.detailsHour}>{hour}</Text>
				<Text style={styles.detailsLocation}>{location}</Text>
			</View>
		</LinearGradient>
	)
}
