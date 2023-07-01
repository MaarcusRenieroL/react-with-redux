import React, { useState } from "react";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

import "./AnimalShow.css";

const animalSVGMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
};


export default function AnimalShow({animal}) {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div onClick={handleClick} className={"animal-show"}>
            <img className={"animal"} src={animalSVGMap[animal]} alt={animal} />
            <img className={"animal-heart"} src={heart} alt={"heart"} style={{ width: (10 + 10 * clicks) + "px"  }}/>
        </div>
    );
}