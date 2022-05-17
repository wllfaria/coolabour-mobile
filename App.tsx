import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from './src/presentation/contexts/ThemeContext'
import { AppRoutes } from './src/presentation/routes/AppRoutes'
import { AuthRoutes } from './src/presentation/routes/AuthRoutes'
import { LightTheme } from './src/presentation/theme/LightTheme'

export default function App() {
	return (
		<NavigationContainer theme={LightTheme}>
			<SafeAreaProvider>
				<ThemeProvider>
					<AuthRoutes />
				</ThemeProvider>
			</SafeAreaProvider>
		</NavigationContainer>
	)
}
