import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import S from "./CommonSwiper.style"

interface CommonSwiperProps {
    items: ReactNode[];
    height?: number | string;
    className?: string;
    autoplay?: SwiperProps['autoplay'];
    pagination?: SwiperProps['pagination'];
    navigation?: SwiperProps['navigation'];
    spaceBetween?: number;
    slidesPerView?: number | 'auto';
    freeMode?: boolean;
    slidesOffsetBefore?: number;
    slidesOffsetAfter?: number;
    isSticky?: boolean;
}

const CommonSwiper = ({
    items = [],
    height = "auto",
    className,
    autoplay = { delay: 3000 },
    pagination = false,
    navigation = false,
    spaceBetween = 0,
    slidesPerView = 1,
    freeMode = false, // 기본값 추가
    slidesOffsetBefore = 0,
    slidesOffsetAfter = 0,
    isSticky= false
}:CommonSwiperProps) => {

    return (
        <S.SwiperWrap $isSticky={isSticky}>
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
                freeMode={freeMode}
                slidesOffsetBefore={slidesOffsetBefore}
                slidesOffsetAfter={slidesOffsetAfter}
                style={{height:height}}
            >
                {items.map((item,i) => (
                    <SwiperSlide
                        key={i}
                        style={{width:'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.SwiperWrap>
    );
};

export default CommonSwiper;