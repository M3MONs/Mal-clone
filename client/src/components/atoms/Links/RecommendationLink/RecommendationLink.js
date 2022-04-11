import React from "react";
import { DefaultLink } from "../DefaultLink/DefaultLink";
import { Cell } from "./RecommendationLink.style";

const RecommendationLink = ({ anime, first = false }) => {
    return (
        <Cell valign='top'>
            <div className='anime'>
                <div>
                    <a href={anime.link}>
                        <img src={anime.img} alt={anime.title} />
                    </a>
                </div>
                <div>
                    {first ? "if you liked" : "...then you might like"}
                    <p>
                        <DefaultLink bold={true}>{anime.title}</DefaultLink>
                    </p>
                </div>
            </div>
        </Cell>
    );
};

export default RecommendationLink;
