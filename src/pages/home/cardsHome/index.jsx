import React from 'react';
import CardTemplate from '../../../TemplateComponents/CardTemplate/index';
import accommodations from '../../../Data/accommodations.json';

function CardsHome() {
    return (
        <section>
            <div className='wrapper'>
                <ul>
                    {accommodations.map(({ id, title, cover}) => (
                        <CardTemplate 
                            key={id}
                            id={id}
                            title={title}
                            cover={cover}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default CardsHome;