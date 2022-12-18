import React from 'react';
// import BannerTemplate to customise for Home page
import BannerTemplate from '../../../TemplateComponents/BannerTemplate/index';
// import image path for Home page
import ImgBannerHomePath from '../../../Assets/Images/imgBannerHome.webp';

// BannerHome component
function BannerHome() {
    return (
        <BannerTemplate
            slogan='Chez vous, partout et ailleurs'
            src={ImgBannerHomePath} 
        />
    )
}

export default BannerHome;