import { useContext, useEffect, useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TodayClockInScreenFactory } from '../../../main/TodayClockInScreenFactory'
import { ClockInCard } from '../../components/ClockInCard'
import { Icon } from '../../components/Icon'
import { Text } from '../../components/Text'
import { ThemeContext } from '../../contexts/ThemeContext'
import type { AppRouteProps } from '../../routes/AppRoutes'
import { styles as BaseStyles } from './styles'

export function TodayClockInScreen(_: AppRouteProps<'Home'>) {
	const { theme } = useContext(ThemeContext)
	const styles = useMemo(() => BaseStyles(theme), [])
	const { dateUtil, locationService } = useMemo(() => TodayClockInScreenFactory.make(), [])
	const [currentTime, setCurrentTime] = useState<string>(dateUtil.getCurrentTime())

	useEffect(() => {
		const tenSeconds = 1000 * 10
		const interval = setInterval(() => setCurrentTime(dateUtil.getCurrentTime()), tenSeconds)

		return () => clearInterval(interval)
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.timeInformation}>
				<Text style={styles.date}>{dateUtil.getFormattedDate()}</Text>
				<Text style={styles.time}>{currentTime}</Text>
				<Text style={styles.location}>
					<>
						<Icon name="map-pin" size={16} color={theme.colors.primary} /> {locationService.getCurrentLocation()}
					</>
				</Text>
			</View>
			<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
				{Array.from({ length: 6 }).map((_, i) => (
					<ClockInCard isCurrent={i === 0} key={i} day="04" month="Mar" hour="18:28" location="Rua dos Pinheiros 498" />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}
