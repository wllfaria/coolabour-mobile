import { StyleSheet } from 'react-native'
import { Theme } from '../../theme'

export const styles = (theme: Theme, isCurrent?: boolean) =>
	StyleSheet.create({
		container: {
			marginBottom: 20,
			padding: 20,
			borderRadius: 20,
			flexDirection: 'row'
		},
		chip: {
			padding: 10,
			justifyContent: 'center',
			backgroundColor: isCurrent ? '#FFFFFF' : '#E9E5FE',
			marginRight: 10,
			borderRadius: 20
		},
		chipDay: {
			fontSize: 30,
			fontWeight: 'bold',
			color: theme.colors.text,
			textAlign: 'center'
		},
		chipMonth: {
			fontSize: 14,
			color: theme.colors.text,
			textAlign: 'center'
		},
		details: {
			justifyContent: 'center'
		},
		detailsHour: {
			fontSize: 20,
			lineHeight: 20,
			fontWeight: 'bold',
			color: isCurrent ? '#FFFFFF' : theme.colors.text,
			marginBottom: 10
		},
		detailsLocation: {
			fontSize: 12,
			lineHeight: 12,
			fontWeight: '300',
			color: isCurrent ? '#FFFFFF' : theme.colors.text
		}
	})
