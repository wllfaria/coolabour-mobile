import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TodayClockInScreen } from '../screens/TodayClockInScreen'
import { NavigationTabBar } from '../components/NavigationTabBar'

type AppStackParamList = {
	TabBar: undefined
}

type AppTabParamList = {
	Home: undefined
	Login: undefined
	Laogin: undefined
	Laaaogin: undefined
}

type RoutesParamList = AppStackParamList & AppTabParamList

export type AppRouteProps<T extends keyof RoutesParamList> = NativeStackScreenProps<RoutesParamList, T>

const Stack = createNativeStackNavigator<AppStackParamList>()
const Tab = createBottomTabNavigator<AppTabParamList>()

function AppTabRoutes() {
	return (
		<Tab.Navigator initialRouteName="Home" tabBar={NavigationTabBar} screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={TodayClockInScreen} />
			<Tab.Screen name="Login" component={TodayClockInScreen} />
			<Tab.Screen name="Laogin" component={TodayClockInScreen} />
			<Tab.Screen name="Laaaogin" component={TodayClockInScreen} />
		</Tab.Navigator>
	)
}

export function AppRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="TabBar" component={AppTabRoutes} />
		</Stack.Navigator>
	)
}
