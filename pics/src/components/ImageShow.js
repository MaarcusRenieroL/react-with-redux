import React from "react";

export default function ImageShow({image}) {
    return (
        <div>
            <img src={image.urls.regular} alt={image.alt_description}/>
        </div>
    );
}