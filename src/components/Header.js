import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
// import {BsSuitHeart} from 'react-icons/bs';
import {RiContactsBook2Line} from 'react-icons/ri';




function Header () { 

    return (

        <header>
            <div className='header-container'>

            <h1>Reels of Fortune</h1> 

   
            <nav className= 'nav-bar'>
                <NavLink to="/"><AiOutlineHome size={25}/></NavLink>
                {/* <NavLink to="/favourites"><BsSuitHeart size={25}/></NavLink> */}
                <NavLink to="/contact"><RiContactsBook2Line size={25}/></NavLink>
            </nav>
            </div>
        </header>
    );
}



export default Header;