import React from 'react';
import BannerTemplate from '../../../TemplateComponents/BannerTemplate/index';
import ImgBannerAboutPath from '../../../Assets/Images/imgBannerAbout.webp';

function BannerAbout() {
    return (
        <BannerTemplate
            slogan=''
            src={ImgBannerAboutPath} 
            />
    )
}

export default BannerAbout;