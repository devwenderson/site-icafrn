import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

import { FaInstagram } from "react-icons/fa6";  


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header>
            <Link to={'/'} className="brand"> ICAF-RN </Link>
            <ul className={menuOpen ? 'nav__navigation open' : 'nav__navigation'}>
                <li>
                    <NavLink to={'/'}>Início</NavLink>
                </li>
                <li>
                    <NavLink to={'/sobre-nos/'}>Sobre nós</NavLink>
                </li>
                <li>
                    <NavLink to={'/sobre-nos/'}>Notícias</NavLink>
                </li>
            </ul>
            <div className="nav__right">
                <a href="#"><FaInstagram size={30} color="#fff"/></a>
            </div>
            <div className='nav__menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Navbar