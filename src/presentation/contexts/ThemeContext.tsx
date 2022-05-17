import { createContext, useReducer } from 'react'
import { LightTheme, Theme } from '../theme'

type ThemeProviderProps = {
	children: React.ReactElement
}

type ThemeState = {
	theme: Theme
}

type ThemeActionType = 'SWITCH_THEME'

type ThemeAction = {
	type: ThemeActionType
	payload: Theme
}

type ReducerHandler = {
	[key in ThemeActionType]: () => ThemeState
}

const initialState: ThemeState = {
	theme: LightTheme
}

const reducer = (state: ThemeState, action: ThemeAction): ThemeState => {
	const handler: ReducerHandler = {
		SWITCH_THEME: () => ({
			...state,
			theme: action.payload
		})
	}

	return handler[action.type]()
}

export const ThemeContext = createContext<ThemeState>(initialState)

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [state] = useReducer(reducer, initialState)

	const contextValue: ThemeState = {
		...state
	}

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
