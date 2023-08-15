import React from 'react'
import ChairList from './ChairList'
import cn from 'classnames'
import './style.scss'
import dataChair from './data.json'
import ResultBooking from './ResultBooking'
const TicketsMovie = () => {
    return (
        <div>
            <div className={cn('bgMovie')}></div>
            <div className={cn('content container')}>
                <h1 className='text-center text-danger mt-3'>Booking Ticket Movie</h1>
                <div className="row">
                    <div className='col-lg-8 col-12'>
                        <div>
                            <h1 className='text-light'>Screen</h1>
                            <h2 className={cn('screen')}></h2>
                        </div>
                        {
                            dataChair.map((chair) => {
                                return <ChairList chair={chair} key={chair.hang} />
                            })
                        }
                    </div>
                    <div className="col-lg-4 col-12">
                        <ResultBooking />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketsMovie
