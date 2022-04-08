import React from "react";
import { Wrapper } from "./EventLink.style";

// Atom dla widgetu: MALxJapan -More than just anime-

const EventLink = ({ item: { img, title, link = "/#" } }) => {
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt='' />
                <div>{title}</div>
            </a>
        </Wrapper>
    );
};

export default EventLink;
