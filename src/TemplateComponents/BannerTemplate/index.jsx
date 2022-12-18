import React from 'react';

// BannerTemplate component
function BannerTemplate(props) {

    return (
        <div className='wrapper'>
            <div className='banner' style={{ backgroundImage: `url(${props.src})` }}>
                <div className='banner-overlay'></div>
                <h1>{props.slogan}</h1>
            </div>
        </div>
    )
}

export default BannerTemplate;