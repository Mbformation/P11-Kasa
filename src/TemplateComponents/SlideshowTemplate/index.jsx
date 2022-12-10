import {useState} from "react";


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
    
    return(
        <div>
            {pictures.map((picture, i) => (
                (index === i) && 
                <img key={i} src={picture} alt={title} /> 
            ))}
            {pictures.length > 1 && 
            (
            <>
            <button className="button-previous" onClick={() => previous()}>avbd
            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z" fill="white"/>
</svg></button>
            <button className="button-next" onClick={() => next()}>next</button>
            </>
            )}
        </div>
    )
}

export default SlideshowTemplate;



