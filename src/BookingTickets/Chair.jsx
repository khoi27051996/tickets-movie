import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookingMovieAction } from '../Store/BookingMovie/slice'
import cn from 'classnames'
const Chair = ({ hang }) => {
    const dispatch = useDispatch()
    const { chairBooking, chairBooked } = useSelector(state => state.movieBooking)
    
    return (
        <div className={cn('chair', {
            booking: chairBooking.find((v) => v.soGhe == hang.soGhe),
            booked : chairBooked.find((v)=> v.soGhe == hang.soGhe)
        })} onClick={() => {
            dispatch(bookingMovieAction.setChairBooking(hang))
        }}>
            {hang.soGhe}
        </div>
    )
}

export default Chair
