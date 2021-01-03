import React from 'react'
import './Gif.css'
import { Link } from 'react-router-dom';

const Gif = ({title,id,url}) => {
    return (
        <div>
        <Link to={`/gif/${id}`} className="gif listOfGifs-item">
            <img loading="lazy" src={url} alt=""/>
            <p className="gif-title">{title}</p>
        </Link> 
        </div>
    )
}

export default Gif
