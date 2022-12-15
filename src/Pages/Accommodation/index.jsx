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
    
    return (
        <>
        <Header />
        <main className="accommodation-content">
            <section className="slideshow">
               
                    * 
                    <SlideshowAccommodation 
                    accommodation={accommodation} />
                    *
            </section>
            <section>
                <div className="wrapper">
                   
                        <h1>{accommodation.title}</h1>
                        <h2>{accommodation.location}</h2>
                        <div className="flex-row-container">
                        <div className="tags-container">{accommodation.tags.map((tag, i) => (
                            <p key={i}>{tag}</p>
                        ))}
                        </div>
                        
                   
                    
                        
                            <p>{accommodation.host.name}</p>
                            <div className="flex-column-container">
                            <img src={accommodation.host.picture} alt='host' />
                        </div>
                        <div>{accommodation.rating}</div>
                        
                        </div>
                    
                        <div>
                            <CollapsibleTemplate
                                label="Description">
                                <p>{accommodation.description}</p>
                            </CollapsibleTemplate>
                        </div>
                        <div>
                            <CollapsibleTemplate
                                label="Equipements">
                                <p>{accommodation.equipments.map((equipment, i) => (
                                    <ul key={i}>
                                        <li>{equipment}</li>
                                    </ul>
                                ))}</p>
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


