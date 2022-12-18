import React from 'react';
import Header from '../../Layouts/Header/index'; // import Header component for Home page
import BannerHome from '../../Pages/Home/BannerHome/index'; // import BannerHome component for Home page
import CardsHome from './CardsHome/index'; // import CardsHome component for Home page
import Footer from '../../Layouts/Footer/index'; // import Footer component for Home page

// Home component for Home page
function Home() {
    return (
        <>
            <Header />
            <main className='home-content'>
                <BannerHome />
                <CardsHome />
            </main>
            <Footer />
        </>
    )
}

export default Home;