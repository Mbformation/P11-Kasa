import React from 'react';
// import CardTemplate for Home page
import CardTemplate from '../../../TemplateComponents/CardTemplate/index';
// import accommodations data to render on Home page
import accommodations from '../../../Data/accommodations.json';

// CardsHome component for Home page
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