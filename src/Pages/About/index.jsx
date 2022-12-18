import React from 'react';
import Header from '../../Layouts/Header/index'; // import Header component
import BannerAbout from './BannerAbout/index'; // import BannerAbout component
import CollapsiblesAbout from './CollapsiblesAbout/index'; // import CollapsiblesAbout component
import Footer from '../../Layouts/Footer/index'; // import Footer component


// About component
function About() {
    return (
        <>
            <Header />
            <main className='about-content'>
                <BannerAbout />
                <CollapsiblesAbout />
            </main>
            <Footer />
        </>
    )
}

export default About;