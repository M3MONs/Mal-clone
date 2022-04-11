import React from "react";
import RecommendationCell from "components/atoms/Links/RecommendationLink/RecommendationLink";
import { Wrapper } from "./RecommendationLink.style";

const RecommendationLink = ({ item: { text, recom, first, second } }) => {
    return (
        <Wrapper>
            <table cellPadding={0} cellSpacing={0} className='anime-wrapper'>
                <tbody>
                    <tr>
                        <RecommendationCell anime={first} first={true} />
                        <RecommendationCell anime={second} />
                    </tr>
                </tbody>
            </table>
            <div>{text}</div>
            <div className='recommendation' dangerouslySetInnerHTML={{ __html: recom }}></div>
        </Wrapper>
    );
};

export default RecommendationLink;
