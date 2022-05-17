import { DateUtil } from '../domain/contracts/DateUtil'
import { LocationService } from '../domain/contracts/LocationService'
import { GoogleMapsLocationService } from '../infra/GoogleMapsLocationService'
import { VanillaDateUtil } from '../utils/VanillaDateUtil'

export class TodayClockInScreenFactory {
	public static make() {
		const dateUtil = TodayClockInScreenFactory.dateUtil
		const locationService = TodayClockInScreenFactory.locationService
		return { dateUtil, locationService }
	}

	private static get dateUtil(): DateUtil {
		const dateUtil = new VanillaDateUtil()
		return dateUtil
	}

	private static get locationService(): LocationService {
		const locationUtil = new GoogleMapsLocationService()
		return locationUtil
	}
}
