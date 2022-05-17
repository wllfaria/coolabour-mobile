import { StyleSheet } from 'react-native'
import { Theme } from '../../theme'

export const styles = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			paddingRight: 20,
			paddingLeft: 20,
			paddingTop: 20
		},
		timeInformation: {
			marginBottom: 30
		},
		date: {
			fontSize: 25,
			color: theme.colors.secondaryText,
			fontWeight: '300',
			lineHeight: 25,
			marginBottom: 10
		},
		time: {
			fontSize: 60,
			lineHeight: 60,
			fontWeight: 'bold',
			color: theme.colors.text
		},
		location: {
			fontSize: 16,
			color: theme.colors.secondaryText
		}
	})
