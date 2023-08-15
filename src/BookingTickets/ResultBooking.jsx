import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import { bookingMovieAction } from '../Store/BookingMovie/slice'
const ResultBooking = () => {
    const { chairBooking, total } = useSelector(state => state.movieBooking)
    const dispatch = useDispatch()
    return (
        <div className='mt-5'>
            <div className='d-flex align-items-center'>
                <h4 className='chair' style={{backgroundColor:'black'}}></h4>
                <h5 style={{ color: 'white' }} className='ms-3'>Ghế đã đặt</h5>
            </div>
            <div className='d-flex align-items-center'>
                <h4 className='chair' style={{ backgroundColor: 'red' }}></h4>
                <h5 style={{ color: 'white' }} className='ms-3'>Ghế đang chọn</h5>
            </div>
            <div className='d-flex align-items-center'>
                <h4 className='chair'></h4>
                <h5 style={{ color: 'white' }} className='ms-3'>Ghế Trống</h5>
            </div>
            <table className={cn('table-dark table')}>
                <thead>
                    <tr>
                        <td>Số Ghế</td>
                        <td>Giá tiền</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        chairBooking.map((v) => {
                            return (

                                <tr key={v.soGhe}>
                                    <td>{v.soGhe}</td>
                                    <td>{v.gia.toLocaleString()} VND</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{
                                            dispatch(bookingMovieAction.setChairBooking(v))
                                        }}>X</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='d-flex justify-content-between' >
            <button className='btn btn-success' onClick={()=>{
                dispatch(bookingMovieAction.setChairBooked())
            }}>Thanh toán </button>
            <p className='text-success fw-bold'>Thành Tiền : {total.toLocaleString()} VND</p>
            </div>
        </div>
    )
}

export default ResultBooking
