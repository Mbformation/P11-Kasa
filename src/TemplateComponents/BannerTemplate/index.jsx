import React from 'react';


function BannerTemplate(props) {

    return(
        <div className='wrapper'>
            <div className='banner'>
                <h1>{props.slogan}</h1>
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}

export default BannerTemplate;