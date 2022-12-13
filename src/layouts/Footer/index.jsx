import React from "react";
import logoFooter from '../../Assets/Logos/logoFooter.png';

function Footer() {
    return(
        <footer>
            <div className="wrapper">
                <img src={logoFooter} alt='logo-kasa' />
                <p>© 2022 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
