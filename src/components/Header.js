import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/">Feed</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/about-us">About Us</Link>
            </nav>
        </header>
    );
};

export default Header;
