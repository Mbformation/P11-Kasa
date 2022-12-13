import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logoHeader from '../../Assets/Logos/logoHeader.png';

function Header() {
    return(
        <header>
            <div className="wrapper">
                <Link to="/"><img src={logoHeader} alt='logo-kasa' /></Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                to="/home"
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                            Accueil
                            </NavLink>    
                        </li>
                        <li>
                            <NavLink 
                                to="/about"
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                            À propos
                            </NavLink> 
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
         

    )
}

export default Header;