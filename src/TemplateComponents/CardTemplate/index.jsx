import React from 'react';
import { Link } from "react-router-dom"

function CardTemplate({ id, title, cover}) {
    return (
        <li className='card'>
            <Link to={`/accommodation/${id}`}>
                <article style={{ backgroundImage: `url(${cover})` }}>
                    <div class="card-overlay"></div>
                    <div class="title-wrapper">
                        <h2>{title}</h2>
                    </div>
                </article>
            </Link>
        </li>
    )
}

export default CardTemplate;

