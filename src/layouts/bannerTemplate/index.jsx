import React from 'react';


function BannerTemplate(props) {

    return(
        <div>
        <h1>{props.slogan}</h1>
        <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default BannerTemplate;