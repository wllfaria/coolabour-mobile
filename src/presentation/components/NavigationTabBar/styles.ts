import { StyleSheet } from 'react-native'

export const styles = () =>
	StyleSheet.create({
		tabBarContainer: {
			width: '100%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			paddingTop: 20
		},
		clockInButtonContainer: {
			marginBottom: 30,
			paddingLeft: 20,
			paddingRight: 20
		},
		clockInButton: {
			borderRadius: 20,
			paddingTop: 20,
			paddingBottom: 20,
			alignItems: 'center'
		},
		clockInButtonLabel: {
			fontWeight: 'bold',
			fontSize: 20,
			color: '#FFFFFF'
		},
		routesContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center'
		},
		routeButton: {
			flex: 1,
			alignItems: 'center'
		}
	})
