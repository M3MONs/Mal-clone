import { DefaultLink } from "components/atoms/Links/DefaultLink/DefaultLink";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RightWidgetItem from "components/atoms/Links/RightWidgetLink/RightWidgetLink";
import { Wrapper, Header, ContentWrapper } from "./RightWidget.style";

const RightWidget = ({ widget = {}, children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Pobieranie danych z serwera
        const fetchData = async () => {
            try {
                const { data } = await axios.post(widget.apiLink);
                setData(data);
            } catch (e) {
                console.log(e);
            }
        };
        // Jezeli nie ma widget.apiLink to nie wykonujemy
        if (widget?.apiLink) fetchData();
    }, []);

    return (
        <Wrapper>
            <Header>
                <h3>{widget.title}</h3>
                <DefaultLink bold={true} href={widget.link} size={"13px"}>
                    More
                </DefaultLink>
            </Header>
            <ContentWrapper>
                {data && data.map((item) => <RightWidgetItem item={item} />)}
            </ContentWrapper>
        </Wrapper>
    );
};

export default RightWidget;
