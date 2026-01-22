import React from 'react';
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import S from "./style"
import {mainMenu} from "./mocks/main.mock";
import {swiperSamples} from "../guides/mocks/guideSample.mock";

const MainContainer = () => {

    return (
        <div>
            <CommonSwiper
                items={swiperSamples}
                height="500px"
                autoplay={{ delay: 3000 }}
                pagination={{ type: 'fraction', custom: true }}
                navigation={false}
            />
            <S.MainSticky className="sticky">
                <CommonSwiper
                    items={mainMenu}
                    height="30px"
                    isMenu={true}
                    pagination={false}
                />
            </S.MainSticky>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
        </div>
    );
};

export default MainContainer;