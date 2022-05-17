import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/LoginScreen/LoginScreen'

type AuthStackParamList = {
	Login: undefined
}

export type AppRouteProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthRoutes() {
	return (
		<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={LoginScreen} />
		</Stack.Navigator>
	)
}
