import { Form as Unform } from '@unform/mobile'
import { ReactElement } from 'react'

type FormProps = {
	children: ReactElement[]
	onSubmit: (data: unknown) => void
	initialData?: Record<string, unknown>
}

export function Form({ children, onSubmit, initialData }: FormProps) {
	return (
		<Unform onSubmit={onSubmit} initialData={initialData}>
			{children}
		</Unform>
	)
}
