import React from 'react';
// import Link element to navigate to Home page
import { Link } from 'react-router-dom';
// import Header component for Not found page
import Header from '../../Layouts/Header/index';
// import Footer component for Not found page
import Footer from '../../Layouts/Footer/index';

// NotFound component for Not found page
function NotFound() {
    return (
        <>
            <Header />
            <main className='not-found-content'>
                <section>
                    <div className='wrapper'>
                        <h1>404</h1>
                        <h2>Oups! La page que vous demandez n'existe pas.</h2>
                        <Link to="/">Retourner sur la page d'accueil</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default NotFound;