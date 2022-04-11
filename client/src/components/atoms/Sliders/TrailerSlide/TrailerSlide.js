import React from "react";
import { DefaultLink } from "../../Links/DefaultLink/DefaultLink";
import { TrailerVideo } from "./TrailerSlide.style";

const TrailerSlide = ({ item: { title, link, img, ytLink } }) => {
    return (
        <div>
            <TrailerVideo href={ytLink} img={img} target='_blank' rel='noreferrer'>
                <span>play</span>
            </TrailerVideo>
            <DefaultLink href={link} className='anime-link' target='_blank' rel='noreferrer'>
                {title}
            </DefaultLink>
        </div>
    );
};

export default TrailerSlide;
