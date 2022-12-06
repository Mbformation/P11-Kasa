import React from 'react';
import BannerTemplate from '../../../layouts/bannerTemplate/index';
import ImgBannerAboutPath from '../../../assets/images/img-banner-about.webp';

function BannerAbout() {
    return (
        <BannerTemplate
            slogan='À propos'
            src={ImgBannerAboutPath} 
            alt="Vue panoramique sur les montagnes"
            />
    )
}

export default BannerAbout;