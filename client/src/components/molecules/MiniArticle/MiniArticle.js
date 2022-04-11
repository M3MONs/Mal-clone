import React from "react";
import { Wrapper } from "./MiniArticle.style";
import { DefaultLink } from "../../atoms/Links/DefaultLink/DefaultLink";

const MiniArticle = ({
    item: { title, link, img, text, info = null, author = null, rating = null },
}) => {
    // info nie jest nullem dla widgetu Featured Articles
    return (
        <Wrapper>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt={title} />
            </a>
            <div>
                <div className='link-wrapper'>
                    <DefaultLink
                        bold={true}
                        href={link}
                        className='title'
                        target='_blank'
                        rel='noreferrer'
                    >
                        {title}
                    </DefaultLink>
                    {/* Wypisuje rating jezeli zmienna znajduje sie w obiekcie */}
                    {rating && <div className='rating'>{rating}</div>}
                </div>
                <p className='article-text'>
                    {text}
                    {/* Wypisuje read more link jezeli nie ma zmiennej info w obiekcie */}
                    {!info && (
                        <DefaultLink href={link} target='_blank' rel='noreferrer'>
                            read more
                        </DefaultLink>
                    )}
                </p>
                {/* Wypisuje info lub author jezeli zmienna znajduje sie w obiekcie */}
                {info && <div dangerouslySetInnerHTML={{ __html: info }} className='information' />}
                {author && (
                    <div dangerouslySetInnerHTML={{ __html: author }} className='information' />
                )}
            </div>
        </Wrapper>
    );
};

export default MiniArticle;
