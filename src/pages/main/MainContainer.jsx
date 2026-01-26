import React from 'react';
import S from "./MainContainer.style"
import MainBanner from "./components/MainBanner";

const MainContainer = () => {

    return (
        <div>
            <MainBanner>
                메인배너
            </MainBanner>
            <S.MainSticky>
                스티키 영역
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
        </div>
    );
};

export default MainContainer;