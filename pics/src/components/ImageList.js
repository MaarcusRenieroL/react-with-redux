import React from "react";

import ImageShow from "./ImageShow";

import "../ImageList.css";

export default function ImageList({images}) {

    const renderedImages = images.map((image, index) => {
        return <ImageShow key={index} image={image} />
    })

    return (
        <div className={"image-list"}>
            {renderedImages}
        </div>
    );
}