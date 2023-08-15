import React from 'react'
import Chair from './Chair'

const ChairList = ({ chair }) => {
    return (
        <div className=" d-flex justify-content-center" style={{ gap: 20 }}>
            {
                chair.danhSachGhe.map((hang) => {
                    return <Chair hang={hang} key={hang.soGhe} />
                })
            }
        </div>
    )
}

export default ChairList
