import {Link} from 'react-router-dom';
import React from 'react';
import S from './BrandContainer.style';
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import sampleBanner02 from "../../assets/images/main/sample-banner02.jpg";
import sampleBanner01 from "../../assets/images/main/sample-banner01.jpg";
import SwiperItem from "../../components/moleculs/swiper/layout/SwiperItem";
import {usePageHeader} from "../../hooks/usePageHeader";
import {brandSwiperData} from "../../assets/mocks/guide.mock";

const BrandContainer = () => {

    usePageHeader({ title: "", showBack: true, isCart: true});

    const pageName = "브랜드"

    return (
        <>
            <S.BrandContent>
                <S.PageTitle>
                    {pageName}
                    <span>(140)</span>
                </S.PageTitle>

                <CommonSwiper
                    items={
                        brandSwiperData.map((data) => (
                            <SwiperItem
                                key={data.id}
                                src={data.src}
                                // 필요한 경우 onClick 추가
                            />
                        ))
                    }
                    slidesOffsetBefore={10}
                    slidesOffsetAfter={10}
                    slidesPerView={1.8}
                    spaceBetween={1}
                    pagination={false}
                    navigation={false}
                    autoplay={false}
                />
                <S.BrandSwiperEx>
                    <div>
                        좋아하는 브랜드를 찜하고<br />
                        <span>나만의 목록</span>을 만들어 보세요!
                    </div>
                </S.BrandSwiperEx>

                <Link to={"/brandList"}>브랜드 리스트화면 링크</Link>
            </S.BrandContent>
        </>
    );
};

export default BrandContainer;