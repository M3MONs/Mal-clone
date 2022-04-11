import React from "react";
import { DefaultLink } from "../DefaultLink/DefaultLink";
import { Wrapper } from "./EventLink.style";

// Atom dla widgetu: MALxJapan -More than just anime-

const EventLink = ({ item: { img, title, link = "/#" } }) => {
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt='' />
                <DefaultLink href={link} bold={true} wrap={true}>
                    {title}
                </DefaultLink>
            </a>
        </Wrapper>
    );
};

export default EventLink;
