import React from "react";
import { Link, useParams } from 'react-router-dom'
import accommodations from '../../data/accommodations.json'

function Accommodation() {
    const {id} = useParams()
    const validId = accommodations.find(validID => validID.id === id)
    if (!validId) {
        return (
            <section>
                <h2>
                    Ce logement n'existe pas ou n'est plus disponible
                </h2>
                <Link to="/">Retour
                </Link>
            </section>
        )
    }
    return (
        <div>
        Accommodation {id}
        </div>
    )
}

export default Accommodation;