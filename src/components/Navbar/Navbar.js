import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
<nav className='navbar'>
    <div className='navbar_logo'>Logo</div>
    <ul className='navbar_links'>
        <li className='navbar_item'>
            <a href='/' className='navbar_link'>Accueil</a>
        </li>
        <li className='navbar_item'>
            <a href='/' className='navbar_link'>Portofolio</a>
        </li>
        <li className='navbar_item'>
            <a href='/' className='navbar_link'>Services</a>
        </li>
        <li className='navbar_item'>
            <a href='/' className='navbar_link'>A propos</a>
        </li>
        <li className='navbar_item'>
            <a href='/' className='navbar_link'>Contact</a>
        </li>
    </ul>
    <button className='navbar_burger'>
        <span className='burger_bar'></span>
    </button>
</nav>
    );
};

export default Navbar;