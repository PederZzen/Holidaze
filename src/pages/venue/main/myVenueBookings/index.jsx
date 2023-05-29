import { Wrapper } from './style'
import dayjs from 'dayjs'

const MyVenueBookings = ({ bookings }) => {
    const dateFrom = dayjs(bookings.dateFrom).format('D MMM YYYY')
    const dateTo = dayjs(bookings.dateTo).format('D MMM YYYY')

    return (
        <Wrapper>
            <h2>Bookings</h2>
            {bookings.length > 0
                ? bookings.map((booking, idx) => {
                      return (
                          <div key={idx}>
                              <p>
                                  {dateFrom} to {dateTo}
                              </p>
                              <p>
                                  {booking.guests}
                                  {booking.guests === 1 ? ' guest' : ' guests'}
                              </p>
                          </div>
                      )
                  })
                : 'No bookings for this venue yet..'}
        </Wrapper>
    )
}

export default MyVenueBookings
