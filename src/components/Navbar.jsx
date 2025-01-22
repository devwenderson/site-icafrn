import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

import { FaInstagram } from "react-icons/fa6";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to={'/'} className="brand"> ICAF-RN </Link>
            <div className='nav__menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'nav__link-list open' : 'nav__link-list'}>
                <li>
                    <NavLink to={'/'}>Início</NavLink>
                </li>
                <li>
                    <NavLink to={'/sobre-nos/'}>Sobre nós</NavLink>
                </li>
            </ul>
            <div>
                <a href="#"><FaInstagram size={30} color="#ffb902"/></a>
            </div>
        </nav>
    )
}

export default Navbar