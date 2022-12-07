import React from 'react';
import BannerTemplate from '../../../TemplateComponents/BannerTemplate/index';
import ImgBannerHomePath from '../../../Assets/Images/imgBannerHome.webp';

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