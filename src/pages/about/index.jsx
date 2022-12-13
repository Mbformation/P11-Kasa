import React from 'react';
import Header from '../../Layouts/Header/index';
import BannerAbout from './BannerAbout/index';
import CollapsiblesAbout from './CollapsiblesAbout/index';
import Footer from '../../Layouts/Footer/index';


function About() {
    return (
        <>
        <Header />
        <main>
        <BannerAbout />
        <CollapsiblesAbout />
        </main>
        <Footer />
        </>
    )
}

export default About;