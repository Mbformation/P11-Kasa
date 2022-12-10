import React from "react";
import SlideshowTemplate from "../../../TemplateComponents/SlideshowTemplate/index"



function SlideshowAccommodation({accommodation}) {
    return(
        <main>
            <div>
                <SlideshowTemplate
                pictures={accommodation.pictures}
                title={accommodation.title}
                 />
            </div>
        </main>
    )
}

export default SlideshowAccommodation;