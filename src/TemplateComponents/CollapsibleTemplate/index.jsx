import React, { useState } from "react";


function CollapsibleTemplate(props) {
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <div className="collapse">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{props.label}</button>
            {isOpen && <div className="content">{props.children}</div>}
          
        </div>
    )
}

export default CollapsibleTemplate;


