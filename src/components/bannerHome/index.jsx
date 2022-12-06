import React from 'react';
import BannerTemplate from '../../layouts/bannerTemplate';
import ImgBannerHomePath from '../../assets/images/img-banner-home.webp';

function BannerHome() {
    return (
        <BannerTemplate
            slogan='Chez vous, partout et ailleurs'
            src={ImgBannerHomePath} 
            alt="Vue panoramique d'un littoral rocheux"
            />
    )
}

export default BannerHome;