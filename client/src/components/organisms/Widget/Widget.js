import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Wrapper, Header, Content } from "./Widget.style";
import Slider from "components/molecules/Slider/Slider";
import { SwiperSlide } from "swiper/react";

const Widget = ({
    widget: {
        title,
        linkTitle,
        link,
        slider,
        slides = null,
        display = "block",
        apiLink = null,
        items = null,
        Atom = null,
    },
}) => {
    const [widgetItems, setWidgetItems] = useState([]);

    useEffect(() => {
        if (apiLink) {
            axios.post(apiLink).then(({ data }) => setWidgetItems(data));
        } else setWidgetItems(items);
        // eslint-disable-next-line
    }, []);

    const WidgetMap = () => {
        return (
            <>
                {/* Jezeli posiada atom to wyświetla go, jeśli nie to nic nie wyświetli */}
                {Atom &&
                    widgetItems?.map((item) =>
                        //Sprawdza czy ma by wyswietlony jako slide czy nie
                        slider ? (
                            <SwiperSlide>
                                <Atom item={item}></Atom>
                            </SwiperSlide>
                        ) : (
                            <Atom item={item}></Atom>
                        )
                    )}
            </>
        );
    };

    return (
        <Wrapper>
            <Header>
                <h2>{title}</h2>
                <a href={link} target='_blank' rel='noreferrer'>
                    {linkTitle}
                </a>
            </Header>
            <Content display={display}>
                {slider ? <Slider slides={slides}>{WidgetMap()}</Slider> : WidgetMap()}
            </Content>
        </Wrapper>
    );
};

Widget.propTypes = {
    title: PropTypes.string,
    linkTitle: PropTypes.string,
    link: PropTypes.string,
    slider: PropTypes.bool,
    display: PropTypes.string,
};

export default Widget;
