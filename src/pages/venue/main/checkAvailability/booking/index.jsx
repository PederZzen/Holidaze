import { Form, InputNumber } from 'antd'
import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import Button from '../../../../../components/button'
import Calendar from 'react-calendar'

const Booking = ({ venue }) => {
    const [totalDays, setTotalDays] = useState(null)
    const [dateFrom, setDateFrom] = useState(null)
    const [dateTo, setDateTo] = useState(null)

    const handleDateChangeFrom = (date) => {
        console.log(date)
    }

    return (
        <Wrapper>
            <Form>
                <div>
                    <p>Dates</p>
                    <Calendar
                        selectRange={true}
                        minDate={new Date()}
                        onClickDay={handleDateChangeFrom}
                    />
                </div>
                <div>
                    <p>Guests</p>
                    <InputNumber min={0} max={venue.maxGuests} />
                </div>
            </Form>
            <div>
                <div>
                    <p>Total</p>
                    <p>{venue.price * totalDays}</p>
                    <p>{`${totalDays} days`}</p>
                </div>
                <div>
                    <Button content={'Reserve now'} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Booking
