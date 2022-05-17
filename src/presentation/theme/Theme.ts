import { Theme as BaseTheme } from '@react-navigation/native'

export type Theme = BaseTheme & {
	colors: {
		secondaryText: string
		primaryGradient: string[]
		secondaryGradient: string[]
	}
}
