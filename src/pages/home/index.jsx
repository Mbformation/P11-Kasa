import React from 'react';
import BannerHome from '../../components/bannerHome/index';
import CardsHome from './cardsHome';
import Header from '../../layouts/Header/index';
import Footer from '../../layouts/Footer/index';




function Home() {
    return (
        <main>
            <Header />
            <BannerHome />
            <CardsHome />
            <Footer />
        </main>
    )
}

export default Home;