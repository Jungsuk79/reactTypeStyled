import {useOutletContext} from 'react-router-dom';
import React, { useEffect } from 'react';
import S from './BrandContainer.style';
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import sampleBanner02 from "../../assets/images/main/sample-banner02.jpg";
import sampleBanner01 from "../../assets/images/main/sample-banner01.jpg";
import SwiperItem from "../../components/moleculs/swiper/layout/SwiperItem";
const BrandContainer = () => {
    const { setHeaderProps } = useOutletContext();
    useEffect(() => {
        // 페이지가 마운트될 때 헤더 정보 설정
        setHeaderProps({ showBack: true });

        // 언마운트될 때 헤더 정보 초기화
        return () => setHeaderProps(null);
    }, [setHeaderProps]);

    const sampleSwiperData2 = [
        { id: 1, src:sampleBanner02 },
        { id: 2, src:sampleBanner01 },
        { id: 3, src:sampleBanner02}
    ];

    const pageName = "브랜드"

    return (
        <>
            <S.BrandContent>
                <S.PageTitle>
                    {pageName}
                    <span>(140)</span>
                </S.PageTitle>

                <S.BrandSwiperWrap>
                    <CommonSwiper
                        items={
                            sampleSwiperData2.map((data) => (
                                <SwiperItem
                                    key={data.id}
                                    src={data.src}
                                    // 필요한 경우 onClick 추가
                                />
                            ))
                        }
                        slidesPerView={1.8}
                        spaceBetween={1}
                        pagination={false}
                        navigation={false}
                        autoplay={false}
                    />
                </S.BrandSwiperWrap>
                <S.BrandSwiperEx>
                    <div>
                        좋아하는 브랜드를 찜하고<br />
                        <span>나만의 목록</span>을 만들어 보세요!
                    </div>
                </S.BrandSwiperEx>

                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
            </S.BrandContent>
        </>
    );
};

export default BrandContainer;