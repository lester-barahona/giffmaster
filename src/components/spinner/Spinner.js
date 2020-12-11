import React from 'react'
import './index.css'
import { ReactComponent as Loader } from './../../img/spinner.svg';

const Spinner = () => {
    return (
        <div className="spinner">
            <Loader/>
        </div>
    )
}

export default Spinner
