import React from "react";
// import Navigate component for page redirection
// import useParams hook to get id from query string
import { Navigate, useParams } from 'react-router-dom';
import accommodations from '../../Data/accommodations.json'; // import accommodations JSON data
import Header from '../../Layouts/Header/index'; // import Header component
import SlideshowAccommodation from "./SlideshowAccommodation/index"; // import Slideshow component
import CollapsibleTemplate from "../../TemplateComponents/CollapsibleTemplate"; // import Collapsible component
import Footer from '../../Layouts/Footer/index'; // import Footer component

// Accommodation component containing all elements for Accommodation page
function Accommodation() {
    const {id} = useParams() // get id from useParams hook
    // assess if id matches an id in accommodations data file 
    const accommodation = accommodations.find(accommodation => accommodation.id === id)  

    if (!accommodation) { // if there is no match
        return (
            // redirect to Not found page
            <Navigate replace to="/notfound" />
        )
    }
    // Loop for coloring stars according to rating value in accommodations data
    const stars = [];
    for (let i = 1; i <= 5; i++)
    {
        stars.push(
            <svg className="rating-stars" width="30" height="30"  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" key={i}>
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill={(accommodation.rating >= i) ? '#FF6060': '#E3E3E3'} />
            </svg>
        )
    }

    return (
        <>
            <Header />
            <main className="accommodation-content">
                <section className="slideshow">
                    <div className="wrapper">
                        <SlideshowAccommodation 
                        accommodation={accommodation} />
                    </div>       
                </section>
                <section>
                    <div className="wrapper">
                        <div className="basic-information">
                            <div>
                                <h1>{accommodation.title}</h1>
                                <h2>{accommodation.location}</h2>
                                <div>
                                    <div className="tags-container">{accommodation.tags.map((tag, i) => (
                                        <p key={i}>{tag}</p>))}
                                    </div>
                                </div>
                            </div>
                            <div className="secondary-information">
                                <div className="host-profile">
                                    <p className="host-name">{accommodation.host.name}</p>
                                    <div className="host-image-container">
                                        <img src={accommodation.host.picture} alt='host' />
                                    </div>  
                                </div>
                                <div className="rating-stars">{stars}</div>
                            </div>
                        </div>
                        <div className="collapsibles-container">
                            <CollapsibleTemplate
                                label="Description">
                                <p>{accommodation.description}</p>
                            </CollapsibleTemplate>
                            <CollapsibleTemplate
                                label="Equipements">
                                <div>{accommodation.equipments.map((equipment, i) => (
                                    <p key={i}>{equipment}</p>))}
                                </div>
                            </CollapsibleTemplate>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Accommodation;


