import React from 'react';
import BannerTemplate from '../../../TemplateComponents/BannerTemplate/index';
import ImgBannerAboutPath from '../../../Assets/Images/imgBannerAbout.webp';

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