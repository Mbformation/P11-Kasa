import React from 'react';
import CardAccommodation from '../../../components/cardAccommodation/index';
import accommodations from '../../../data/accommodations.json'

function CardsHome() {
    return (
        <section>
            <ul>
                {accommodations.map(({ id, title, cover}) => (
                    <CardAccommodation 
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default CardsHome;