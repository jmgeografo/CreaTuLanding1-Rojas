import React from 'react'
import CartWidget from './CartWidget'
import umbriaLogo from '../assets/logoUmbria.svg'

const NavBar = () => {
    return (
        <nav>
            <img src={umbriaLogo} className="logo" alt="Umbría logo"/>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nuestra historia</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar
