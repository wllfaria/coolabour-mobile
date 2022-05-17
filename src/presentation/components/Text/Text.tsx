import { Text as RNText } from 'react-native'
import { styles as BaseStyles } from './styles'

type TextProps = {
	children: string | React.ReactElement
	style?: Record<string, unknown>
}

export function Text({ children, style }: TextProps) {
	const styles = BaseStyles()

	return <RNText style={{ ...style, ...styles }}>{children}</RNText>
}
