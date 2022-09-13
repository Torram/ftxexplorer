import React, { useState } from "react";

const Collection = (props) =>{
    const [hover, setHover] = useState(false);
    
    return (
        <>
            
            <img src={props.imageURL} alt={props.collection} avatar="true"/>
        </>
            
            
    )
}

export default Collection;