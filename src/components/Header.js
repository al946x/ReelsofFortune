import React from 'react';
import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <header>
            <h1>Reels of Fortune</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/favourites">Favourites</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    );

}

export default Header;