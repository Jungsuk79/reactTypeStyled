import React, {useState,useRef} from 'react';
import { Outlet , useLocation } from 'react-router-dom';
import S from './BasicLayout.style'
import CommonMenu from "../../components/moleculs/commonmenu/CommonMenu";
import { HeaderProps } from '../../types/layout';
import CommonHeader from "../../components/moleculs/header/CommonHeader";
import MainBanner from "../main/components/MainBanner";
import {useScrollDown} from '../../hooks/useScrollDown'
import MainHeader from "../../components/moleculs/header/MainHeader";

const BasicLayout = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { isDown: isScrollDown, posY } = useScrollDown(scrollRef);
    const [headerProps, setHeaderProps] = useState<HeaderProps | null>(null);
    const location = useLocation();
    const isMain = location.pathname === "/";

    // Top버튼 영역 관련
    const isScrolled = posY > 0;


    return (
        <S.LayoutWrap>
            <S.LayoutContent ref={scrollRef}>
                {isMain ? (
                    <>
                        <MainBanner>메인배너 : 설명</MainBanner>
                        <S.StickHeader $isHidden={!isScrollDown && posY < 100}>
                            <MainHeader />
                        </S.StickHeader>
                    </>
                ) : (
                    // 서브 페이지 공통 헤더
                    headerProps && (
                        <S.StickHeader $isHidden={false}>
                            <CommonHeader headerProps={headerProps} />
                        </S.StickHeader>
                    )
                )}
                <Outlet context={{ setHeaderProps }} />
                {isScrolled && (
                    <S.FolatingWrap $isHidden={isScrollDown}>
                        <S.FolatingContent>
                            {isMain && (
                             <>
                                 <button>FAQ</button>
                                 <button>LOGIN</button>
                             </>
                            )}
                            <button onClick={() => scrollRef.current?.scrollTo({top: 0, behavior: 'smooth'})}>
                                TOP
                            </button>
                        </S.FolatingContent>
                    </S.FolatingWrap>
                )}
            </S.LayoutContent>
            <CommonMenu isHidden={isScrollDown} />
        </S.LayoutWrap>
    );
};

export default BasicLayout;