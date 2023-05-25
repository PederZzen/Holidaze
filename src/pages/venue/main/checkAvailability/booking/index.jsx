import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import Button from '../../../../../components/button'
import Calendar from 'react-calendar'
import dayjs from 'dayjs'
import usePostPut from '../../../../../hooks/usePostPut'
import { BOOKINGS_URL } from '../../../../../utils/constants'
import { useNavigate } from 'react-router-dom'

const Booking = ({ venue }) => {
    const [totalDays, setTotalDays] = useState('')
    const [bookedDates, setBookedDates] = useState([])
    const [selectedDates, setSelectedDates] = useState([])
    const [guests, setGuests] = useState(0)
    const [fetchData, response, error] = usePostPut()
    const [inputError, setInputError] = useState('')
    const navigate = useNavigate()
    const user = localStorage.getItem('name')

    const handleDateChange = (date) => {
        const formattedDates = date.map((d) => dayjs(d))
        const diffDates = formattedDates[1].diff(formattedDates[0], 'day')
        const formattedStringDates = formattedDates.map((d) => d.format())
        setSelectedDates(formattedStringDates)
        setTotalDays(diffDates)
    }

    const handleGuestsChange = (event) => {
        const { value } = event.target
        setGuests(Number(value))
    }

    useEffect(() => {
        const getDisabledDates = (data) => {
            const result = []
            data.forEach((date) => {
                const { dateFrom, dateTo } = date
                const startDate = dayjs(dateFrom)
                const endDate = dayjs(dateTo)
                const diffDates = endDate.diff(startDate, 'day')

                for (let i = 0; i <= diffDates; i++) {
                    result.push(startDate.add(i, 'day').toDate())
                }
            })
            return result
        }
        const disabledDates = getDisabledDates(venue.bookings)
        setBookedDates(disabledDates)
    }, [venue.bookings])

    const tileDisabled = ({ date }) => {
        return bookedDates.some((bookedDate) =>
            dayjs(bookedDate).isSame(date, 'day')
        )
    }

    class BookingObject {
        constructor(dateFrom, dateTo, guests, venueId) {
            this.dateFrom = dateFrom
            this.dateTo = dateTo
            this.guests = guests
            this.venueId = venueId
        }
    }

    const onSubmit = () => {
        const data = new BookingObject(
            selectedDates[0],
            selectedDates[1],
            guests,
            venue.id
        )

        if (data.guests && data.dateTo && data.dateFrom && data.venueId) {
            fetchData(BOOKINGS_URL + '/', data, 'POST')
            navigate(`/profile/${user}`)
        } else {
            setInputError('*Please select dates and guests')
        }
    }

    return (
        <Wrapper>
            <Form>
                <div>
                    <h2>Dates</h2>
                    <Calendar
                        tileDisabled={tileDisabled}
                        selectRange={true}
                        minDate={new Date()}
                        onChange={handleDateChange}
                    />
                </div>
                <div>
                    <h2>Guests</h2>
                    <input
                        type="number"
                        min={1}
                        max={venue.maxGuests}
                        onChange={handleGuestsChange}
                    />
                </div>
                <span>{inputError}</span>
            </Form>
            <div className="drawer-footer">
                <div>
                    <h3>Total</h3>
                    <p>{venue.price * totalDays}</p>
                    <p>{`${totalDays} nights`}</p>
                </div>
                <div>
                    <Button content={'Reserve now'} onClick={onSubmit} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Booking
