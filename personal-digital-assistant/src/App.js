import React from 'react';

import ProfileCard from "./ProfileCard";

import alexa from "./images/alexa.png";
import cortana from "./images/cortana.png";
import siri from "./images/siri.png";

import "bulma/css/bulma.css";

export default function App() {
    return (
        <div>
            <section className={"hero is-primary"}>
                <div className={"hero-body"}>
                    <p className={"title"}>
                        Personal Digital Assistant
                    </p>
                </div>
            </section>
            <div className={"container"}>
                <section className={"section"}>
                    <div className={"columns"}>
                        <div className={"column is-4"}>
                            <ProfileCard title={"Alexa"} twitter_handle={"alexa99"} image_url={alexa}
                                         image_alt={"alexa"}
                                         description={"Alexa was created by Amazon and helps you buy things"}/>

                        </div>
                        <div className={"column is-4"}>
                            <ProfileCard title={"Cortana"} twitter_handle={"cortana32"} image_url={cortana}
                                         image_alt={"cortana"}
                                         description={"Cortana was made by Microsoft but who knows what it does?"}/>

                        </div>
                        <div className={"column is-4"}>

                            <ProfileCard title={"Siri"} twitter_handle={"siri01"} image_url={siri} image_alt={"siri"}
                                         description={"Siri was made by Apple and it is being phased out"}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}