import React from 'react';
import BannerTemplate from '../../layouts/bannerTemplate';
import HomeBannerImgPath from '../../assets/images/img-banner-home.webp';

function BannerHome() {
    return (
        <BannerTemplate
            slogan='Chez vous, partout et ailleurs'
            src={HomeBannerImgPath} 
            alt="Vue panoramique d'un littoral rocheux"
            />
    )
}

export default BannerHome;