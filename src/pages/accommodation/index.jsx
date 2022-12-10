import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import accommodations from '../../Data/accommodations.json';
import SlideshowAccommodation from "./SlideshowAccommodation/index"
//import CollapsibleTemplate from "../../TemplateComponents/CollapsibleTemplate";


function Accommodation() {
    const {id} = useParams()
    const accommodation = accommodations.find(accommodation => accommodation.id === id)

    if (!accommodation) {
        return (
            <Navigate replace to="/notfound" />
        )
    }
    
    return (
    
        
        <section>
            <SlideshowAccommodation 
            accommodation={accommodation} />
            {/*
            <article>
                <h1>{accommodations.title}</h1>
                <h2>{accommodations.location}</h2>
                <div>{accommodations.tags.map((tag, i) => (
                    <p key={i}>{tag}</p>
                ))}
                </div>
            </article>
            <article>
                <div>
                    <p>{accommodations.host.name}</p>
                    <img src={accommodations.host.picture} alt='host' />
                </div>
                <div>{accommodations.rating}</div>
            </article>
            <article>
                <div>
                    <CollapsibleTemplate
                        label="Description">
                        <p>{accommodations.description}</p>
                    </CollapsibleTemplate>
                </div>
                <div>
                    <CollapsibleTemplate
                        label="Equipements">
                        <p>{accommodations.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>{equipment}</li>
                            </ul>
                        ))}</p>
                    </CollapsibleTemplate>
                </div>
            </article>
            */}
        </section>

    )
}

export default Accommodation;


