import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header/index';
import Footer from '../../Layouts/Footer/index';


function NotFound() {
    return (
        <>
        <Header />
        <main>
        <section>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/home">Retourner sur la page d'accueil</Link>
        </section>
        </main>
        <Footer />
        </>
    )
}

export default NotFound;