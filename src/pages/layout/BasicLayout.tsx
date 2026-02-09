import React, {useState,useRef,useEffect} from 'react';
import { Outlet , useLocation } from 'react-router-dom';
import S from './BasicLayout.style'
import CommonMenu from "../../components/moleculs/commonmenu/CommonMenu";
import { HeaderProps } from '../../types/layout';
import CommonHeader from "../../components/moleculs/header/CommonHeader";
import MainBanner from "../main/components/MainBanner";
import {useScrollDown} from '../../hooks/useScrollDown'
import Footer from 'src/components/moleculs/footer/Footer';

const BasicLayout = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { isDown: isScrollDown, posY } = useScrollDown(scrollRef);
    const [headerProps, setHeaderProps] = useState<HeaderProps | null>(null);
    const location = useLocation();
    const isMain = location.pathname === "/";

    // Top버튼 영역 관련
    const isScrolled = posY > 0;

    // 페이지 최초진입시 상단으로 이동
    const { pathname } = useLocation();
    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0);
    }, [pathname]);

    return (
        <S.LayoutWrap>
            <S.LayoutContent ref={scrollRef}>
                {isMain && (
                    <MainBanner>메인배너 : 설명</MainBanner>
                )}
                {headerProps && (
                    <>
                        <S.StickHeader $isHidden={false}>
                            <CommonHeader headerProps={headerProps} className={isMain ? "main-header": "" } />
                        </S.StickHeader>
                    </>
                )}
                <Outlet context={{ setHeaderProps }} />
                {isScrolled && (
                    <S.FolatingWrap $isHidden={isScrollDown}>
                        <S.FolatingContent>
                            {isMain && (
                             <>
                                 <button>FAQ</button>
                                 <button>FAV</button>
                             </>
                            )}
                            <button onClick={() => scrollRef.current?.scrollTo({top: 0, behavior: 'smooth'})}>
                                TOP
                            </button>
                        </S.FolatingContent>
                    </S.FolatingWrap>
                )}
                <Footer />
            </S.LayoutContent>
            <CommonMenu isHidden={isScrollDown} />
        </S.LayoutWrap>
    );
};

export default BasicLayout;