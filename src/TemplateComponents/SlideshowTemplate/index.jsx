import {useState} from "react";


// SlideshowTemplate component
function SlideshowTemplate({pictures, title}) 
{
    const [index, setindex] = useState(0);
    
    function previous(){
        if (index === 0){
            setindex(pictures.length - 1)
        }else{
            let previous = index - 1;
            setindex(previous)
        }
    }

    function next(){
        if (index === pictures.length - 1){
         setindex(0)   
        }else
        {
            let next = index + 1;
            setindex(next)
        }
    }
    
    return (
        <>
            <div className="slideshow-container">
                <div className="slideshow-image-container">
                    <div className="slideshow-slider" style={{transform: `translateX(${-index * 100}%)`}}>
                        {pictures.map((picture, i) => (
                            <div style={{ backgroundImage: `url("${picture}")` }} className="slideshow-image" key={i} />
                        ))}
                    </div>
                </div>
                {pictures.length > 1 && (
                    <>
                        <div className="slideshow-button-container">
                            <button className="slideshow-button" onClick={() => previous()}>
                                <svg className="slideshow-arrow" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                                </svg>
                            </button>
                            <button className="slideshow-button" onClick={() => next()}>
                                <svg className="slideshow-arrow" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="slideshow-counter">{index + 1}/{pictures.length}</div>
                    </>
                )}
            </div>
        </>
    )
}

export default SlideshowTemplate;



