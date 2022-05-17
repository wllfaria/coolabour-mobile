import { DateUtil } from '../domain/contracts/DateUtil'
import * as Localization from 'expo-localization'

export class VanillaDateUtil implements DateUtil {
	private getDateInTimezone(): Date {
		return new Date(new Date().toLocaleString(Localization.locale, { timeZone: Localization.timezone }))
	}

	private getMonthName(numericMonth: number): string {
		const monthNames: { [key: number]: string } = {
			0: 'Janeiro',
			1: 'Fevereiro',
			2: 'Março',
			3: 'Abril',
			4: 'Maio',
			5: 'Junho',
			6: 'Julho',
			7: 'Agosto',
			8: 'Setembro',
			9: 'Outubro',
			10: 'Novembro',
			11: 'Dezembro'
		}
		return monthNames[numericMonth]
	}

	private getDay(date: Date): string {
		return date.getDate().toString().padStart(2, '0')
	}

	private getLongMonth(date: Date): string {
		return this.getMonthName(date.getMonth())
	}

	private padTo2Digits(number: number): string {
		return number.toString().padStart(2, '0')
	}

	private getHours(date: Date): string {
		return this.padTo2Digits(date.getHours())
	}

	private getMinutes(date: Date): string {
		return date.getMinutes().toString().padStart(2, '0')
	}

	public getFormattedDate(): string {
		const date = new Date()
		const numericDay = this.getDay(date)
		const longMonth = this.getLongMonth(date)
		const year = date.getFullYear()
		return `${numericDay} de ${longMonth}, ${year}`
	}

	public getCurrentTime(): string {
		const date: any = this.getDateInTimezone()
		const hours = this.getHours(date)
		const minutes = this.getMinutes(date)
		return `${hours}:${minutes}`
	}
}
