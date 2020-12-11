import React from 'react'


const Detail = ({match:{params}}) => {

    const {id}=params
    return (
        <div>
            Detail {id}
        </div>
    )
}

export default Detail
