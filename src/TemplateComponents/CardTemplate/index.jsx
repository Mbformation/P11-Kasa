import React from 'react';
import { Link } from "react-router-dom"

function CardTemplate({ id, title, cover}) {
    return (
        <li>
            <Link to={`/accommodation/${id}`}>
            <article>
                <img src={cover} alt={title} />
                <h2>{title}</h2>
                </article>
            </Link>
        </li>
    )
}

export default CardTemplate;

