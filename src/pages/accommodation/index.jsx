import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import accommodations from '../../Data/accommodations.json';

function Accommodation() {
    const {id} = useParams()
    const validId = accommodations.find(validId => validId.id === id)

    if (!validId) {
        return (
            
            <Navigate replace to="/notfound" />
            
        )
    }
    return (
        <div>
        Accommodation {id}
        </div>
    )
}

export default Accommodation;


