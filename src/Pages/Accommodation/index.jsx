import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import accommodations from '../../Data/accommodations.json';
import Header from '../../Layouts/Header/index';
import SlideshowAccommodation from "./SlideshowAccommodation/index";
import CollapsibleTemplate from "../../TemplateComponents/CollapsibleTemplate";
import Footer from '../../Layouts/Footer/index';



function Accommodation() {
    const {id} = useParams()
    const accommodation = accommodations.find(accommodation => accommodation.id === id)

    if (!accommodation) {
        return (
            <Navigate replace to="/notfound" />
        )
    }
    
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
                                    <p key={i}>{tag}</p>
                                ))}
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
                            <CollapsibleTemplate
                                label="Description">
                                <p>{accommodation.description}</p>
                            </CollapsibleTemplate>
                            <CollapsibleTemplate
                                label="Equipements">
                                <p>{accommodation.equipments.map((equipment, i) => (
                                    <ul key={i}>
                                        <li>{equipment}</li>
                                    </ul>
                                ))}</p>
                            </CollapsibleTemplate>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default Accommodation;


