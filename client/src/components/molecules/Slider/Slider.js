import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ children }) => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={4.5}
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className='mySwiper'
            >
                {children}
            </Swiper>
        </div>
    );
};

export default Slider;
