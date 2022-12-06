import React from 'react';
import Header from '../../layouts/Header/index';
import BannerAbout from './bannerAbout';
import CollapsesAbout from './collapsesAbout/index'
import Footer from '../../layouts/Footer/index';


function About() {
    return (
        <main>
        <Header />
        <BannerAbout />
        <CollapsesAbout />
        <Footer />
        </main>
    )
}

export default About;