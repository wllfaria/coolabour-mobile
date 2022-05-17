import { LocationService } from '../domain/contracts/LocationService'

export class GoogleMapsLocationService implements LocationService {
	public getCurrentLocation(): string {
		return 'Rua dos Pinheiros 498'
	}
}
