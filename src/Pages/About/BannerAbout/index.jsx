import React from 'react';
// import BannerTemplate to customise for About page
import BannerTemplate from '../../../TemplateComponents/BannerTemplate/index';
// import image path
import ImgBannerAboutPath from '../../../Assets/Images/imgBannerAbout.webp';

// BannerAbout component
function BannerAbout() {
    return (
        <BannerTemplate
            src={ImgBannerAboutPath} 
        />
    )
}

export default BannerAbout;
