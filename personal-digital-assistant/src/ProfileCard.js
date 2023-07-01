import React from "react";

export default function ProfileCard({title, twitter_handle, image_url, image_alt, description}) {
    return (
        <div className={"card"}>
            <div className={"card-image"}>
                <figure className={"image is-1by1"}>
                    <img src={image_url} alt={image_alt}/>
                </figure>
            </div>
            <div className={"card-content"}>
                <div className={"media-content"}>
                    <p className={"title is-4"}>{title}</p>
                    <p className={"subtitle is-6"}>@{twitter_handle}</p>
                </div>
                <div className={"content"}>
                    {description}
                </div>
            </div>
        </div>
    )
}