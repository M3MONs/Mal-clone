import React from "react";
import { Wrapper } from "./MiniArticle.style";
import { DefaultLink } from "../DefaultLink/DefaultLink";

const MiniArticle = ({ item: { title, link, img, text } }) => {
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt={title} />
            </a>
            <div>
                <DefaultLink
                    bold={true}
                    href={link}
                    className='title'
                    target='_blank'
                    rel='noreferrer'
                >
                    {title}
                </DefaultLink>
                <p className='article-text'>
                    {text}{" "}
                    <DefaultLink href={link} target='_blank' rel='noreferrer'>
                        read more
                    </DefaultLink>
                </p>
            </div>
        </Wrapper>
    );
};

export default MiniArticle;
