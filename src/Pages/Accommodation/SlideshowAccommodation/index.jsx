import React from "react";
import SlideshowTemplate from "../../../TemplateComponents/SlideshowTemplate/index";

// SlideshowAccommodation component

function SlideshowAccommodation({accommodation}) {
    return  (
        <SlideshowTemplate
            pictures={accommodation.pictures}
            title={accommodation.title}
        />
    )
}

export default SlideshowAccommodation;