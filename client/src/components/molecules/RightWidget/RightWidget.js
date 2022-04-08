import { DefaultLink } from "components/atoms/DefaultLink/DefaultLink";
import React from "react";
import { Wrapper, Header, ContentWrapper } from "./RightWidget.style";

const RightWidget = ({ widget = {}, children }) => {
    return (
        <Wrapper>
            <Header>
                <h3>{widget.title}</h3>
                <DefaultLink bold={true} href={widget.link} size={"13px"}>
                    More
                </DefaultLink>
            </Header>
            <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
    );
};

export default RightWidget;
