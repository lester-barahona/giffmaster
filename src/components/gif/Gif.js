import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';

const Gif = ({title,id,url}) => {
    return (
        <Link to={`/gif/${id}`} className="gif lisOfGif-item">
            <img loading="lazy" src={url} alt=""/>
            <p className="gif-title">{title}</p>
        </Link> 
    )
}

export default Gif
