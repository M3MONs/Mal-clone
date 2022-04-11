import React from "react";
import { DefaultLink } from "../DefaultLink/DefaultLink";
import { Wrapper, InfoContent } from "./RightWidgetLink.style";

const RightWidgetLink = ({ item }) => {
    return (
        <Wrapper>
            <div className='number'>{item.ranking}</div>
            <img src={item.img} alt={item.title} />
            <InfoContent>
                <DefaultLink bold={true} wrap={true}>
                    {item.title}
                </DefaultLink>
                <p className='rating'>{item.info}</p>
                <p className='members'>{item.members}</p>
            </InfoContent>
        </Wrapper>
    );
};

export default RightWidgetLink;
