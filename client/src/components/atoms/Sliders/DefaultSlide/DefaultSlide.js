import React from "react";
import { Wrapper } from "./DefaultSlide.style";
import { DefaultLink } from "../../Links/DefaultLink/DefaultLink";

const DefaultSlide = ({ item: { img, link, title } }) => {
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt={title} />
                <DefaultLink href={link} className='text' target='_blank' rel='noreferrer'>
                    {title}
                </DefaultLink>
            </a>
        </Wrapper>
    );
};

export default DefaultSlide;
