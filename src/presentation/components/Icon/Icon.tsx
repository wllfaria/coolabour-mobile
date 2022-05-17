import { FontAwesome5 } from '@expo/vector-icons'

type IconProps = {
	name: string
	size: number
	color: string
}

export function Icon({ name, size, color }: IconProps) {
	return <FontAwesome5 name={name} size={size} color={color} />
}
