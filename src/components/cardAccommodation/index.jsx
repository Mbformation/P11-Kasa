import React from 'react';
import { Link } from "react-router-dom"

function CardAccommodation({ id, title, cover}) {
    return (
        <li key={id}>
            <Link to={`/accommodation/${id}`}>
            <article>
                <img src={cover} alt={title} />
                <h2>{title}</h2>
                </article>
            </Link>
        </li>
    )
}

export default CardAccommodation;

