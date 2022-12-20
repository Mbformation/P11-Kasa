import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logoHeader from '../../Assets/Logos/logoHeader.png';

function Header() {
    return(
        <header>
            <div className="wrapper">
                <Link to="/"><img src={logoHeader} alt='logo-kasa' title="Aller sur la page d'accueil" /></Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                to="/"
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                title="Aller sur la page d'accueil"
                            >
                                Accueil
                            </NavLink>    
                        </li>
                        <li>
                            <NavLink 
                                to="/about"
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                title="Aller sur la page à propos"
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