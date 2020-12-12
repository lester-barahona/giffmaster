import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="app-header">
            <Link to="/" className="app-logo">
                <img src={'/logo.svg'} 
                      alt="giffmaster" 
                      />
                <span>GifMaster</span>
            </Link>
            <div className="trending-searchs">
             
            </div>
            <div className="auth-container">
             
            </div>
        </header>
    )
}

export default Header
