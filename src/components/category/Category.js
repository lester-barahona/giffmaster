import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom';

const Category = ({name,options}) => {
    return (
        <div className="category-container">
            <h4 className="category-title">{name}</h4>
            <ul className="category-options">
                {
                    options.map(option=>(
                            <li key={option}>
                                <Link to={`/search/${option}`}>{option}</Link>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}

export default Category