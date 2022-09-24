import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
        <h2>Welcome to React Website</h2>
        <nav>
            <a href='/home'>Home</a>
            <a href='/shop'>Shop</a>
            <a href='/about'>About</a>

        </nav>
        </div>
    );
};

export default Header;