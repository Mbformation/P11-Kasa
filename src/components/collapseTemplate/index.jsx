import React, { useState } from "react";


function CollapseTemplate(props) {
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <div className="collapse">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{props.title}</button>
            {isOpen && <div className="content">{props.content}</div>}
        </div>
    )
}

export default CollapseTemplate;