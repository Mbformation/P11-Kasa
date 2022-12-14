import React from 'react';
import Header from '../../Layouts/Header/index';
import BannerHome from '../../Pages/Home/BannerHome/index';
import CardsHome from './CardsHome/index';
import Footer from '../../Layouts/Footer/index';




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