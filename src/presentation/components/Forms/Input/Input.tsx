import { Ref, useContext, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { KeyboardTypeOptions, TextInput, TextStyle } from 'react-native'
import { styles as BaseStyles } from './styles'
import { ThemeContext } from '../../../contexts/ThemeContext'

type AutoCompleteType =
	| 'name'
	| 'cc-csc'
	| 'cc-exp'
	| 'cc-exp-month'
	| 'cc-exp-year'
	| 'cc-number'
	| 'email'
	| 'password'
	| 'postal-code'
	| 'street-address'
	| 'tel'
	| 'username'
	| 'off'

type InputProps = {
	name: string
	placeholder?: string
	autoCompleteType?: AutoCompleteType
	keyboardType?: KeyboardTypeOptions
	style?: TextStyle
}

export function Input({ name, placeholder, autoCompleteType, keyboardType, style }: InputProps) {
	const { theme } = useContext(ThemeContext)
	const styles = BaseStyles(theme)
	const inputRef = useRef<TextInput>(null)
	const { fieldName, registerField, defaultValue } = useField(name)

	useEffect(() => {
		if (inputRef.current) inputRef.current.value = defaultValue
	}, [defaultValue])

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			getValue() {
				if (!inputRef.current) return ''
				return inputRef.current.value
			},
			setValue(_: Ref<TextInput>, value: string) {
				if (!inputRef.current) return
				inputRef.current.setNativeProps({ text: value })
				inputRef.current.value = value
			},
			clearValue() {
				if (!inputRef.current) return
				inputRef.current.setNativeProps({ text: '' })
				inputRef.current.value = ''
			}
		})
	}, [fieldName, registerField])

	return (
		<TextInput
			ref={inputRef}
			blurOnSubmit
			placeholder={placeholder}
			defaultValue={defaultValue}
			keyboardType={keyboardType}
			autoCompleteType={autoCompleteType}
			style={{ ...styles.input, ...style }}
			placeholderTextColor={theme.colors.secondaryText}
		/>
	)
}
