import { StyleSheet } from 'react-native'
import { Theme } from '../../../theme'

export const styles = (theme: Theme) =>
	StyleSheet.create({
		input: {
			height: 50,
			paddingLeft: 10,
			paddingRight: 10,
			backgroundColor: '#FFFFFF',
			borderRadius: 10,
			fontSize: 16,
			fontWeight: 'bold',
			color: theme.colors.text
		}
	})
