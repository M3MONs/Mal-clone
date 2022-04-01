import React from "react";
import { Wrapper } from "./SliderLink.style";

const SliderLink = ({ title, img, link }) => {
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt={title} />
                <a href={link} className='text' target='_blank' rel='noreferrer'>
                    {title}
                </a>
            </a>
        </Wrapper>
    );
};

export default SliderLink;
