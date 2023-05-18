import {
    faCoffee,
    faGear,
    faParking,
    faPaw,
    faWifi,
} from '@fortawesome/free-solid-svg-icons'

export const BASE_URL = 'https://api.noroff.dev/api/v1/holidaze'
export const VENUES_URL = BASE_URL + '/venues/'
export const REGISTER_URL = BASE_URL + '/auth/register'
export const LOGIN_URL = BASE_URL + '/auth/login'
export const PROFILE_URL = BASE_URL + '/profiles/'
export const BOOKINGS_URL = BASE_URL + '/bookings/'

export const OWNER_FLAG = '?_owner=true'
export const BOOKINGS_FLAG = '_bookings=true'
export const VENUE_FLAG = '_venues=true'

export const SORT_DESC = '?sort=created&sortOrder=desc'
export const SORT_ASC = '?sort=created&sortOrder=asc'

export const color = {
    main: '#BB2649',
    accent: '#2F4858',
    light: '#FFFCF8',
    dark: '#252525',
}

export const Icons = {
    wifiIcon: faWifi,
    parkingIcon: faParking,
    petIcon: faPaw,
    breakfastIcon: faCoffee,
    settingsIcon: faGear,
}
