import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CommonSwiperProps {
    items: ReactNode[];
    height?: number | string;
    className?: string;
    autoplay?: SwiperProps['autoplay'];
    pagination?: SwiperProps['pagination'];
    navigation?: SwiperProps['navigation'];
    spaceBetween?: number;
    slidesPerView?: number | 'auto';
}

const CommonSwiper = ({
    items = [],
    height = 150,
    className,
    autoplay = { delay: 3000 },
    pagination = false,
    navigation = false,
    spaceBetween = 0,
    slidesPerView = 1
}:CommonSwiperProps) => {

    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay, FreeMode]}
            className={className}
            pagination={pagination === false ? false : {
                clickable: true,
                ...pagination
            }}
            autoplay={autoplay}
            navigation={navigation}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            style={{height:height}}
        >
            {items.map((item,i) => (
                <SwiperSlide
                    key={i}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CommonSwiper;