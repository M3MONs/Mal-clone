import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ children, slides = 4.5 }) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={slides}
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
