import React from 'react';
import { HeaderProps } from '../../../types/layout';
import S from './CommonHeader.style'
import {Link} from "react-router-dom";

interface CommonHeaderProps {
    headerProps: HeaderProps; // 여기서는 null을 허용하지 않게 설정
}

const CommonHeader = ({ headerProps }: CommonHeaderProps) => {
    const {
        showBack = true,
        isSearch = true,
        isCart = true,
        isHome = false,
        title = ""
    } = headerProps;

    const BackButton =() =>(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9471 3.46667L2.91003 11.5018L22.998 11.5018V12.5018L2.90906 12.5018L10.946 20.537L10.238 21.2362L1.70303 12.701L1.00305 11.9921L1.70303 11.287L10.239 2.74792L10.9471 3.46667Z" fill="black"></path></svg>
    )
    const HomeButton =() =>(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.998 17.998V18.998H7.99805V17.998H15.998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3359 10.9619L22.6641 11.7021L20.998 10.1865V22.6641H2.99805V10.1904L1.33594 11.7021L0.664062 10.9619L12 0.65625L23.3359 10.9619ZM3.99805 9.28125V21.665H19.998V9.27832L12 2.00684L3.99805 9.28125Z" fill="black"></path></svg>
    )

    return (
        <>
            <S.CommonHeaderWrap>
                {showBack &&(
                    <S.BackButton onClick={() => window.history.back()}>
                        <BackButton />
                    </S.BackButton>
                )}
                {title &&(
                    <S.PageTitle>{title}</S.PageTitle>
                )}
                {(isSearch || isCart || isHome) && (
                    <S.RightArea>
                        {isSearch && <S.SearchBtn>검색</S.SearchBtn>}
                        {isCart && <S.CartWrap>0</S.CartWrap>}
                        {isHome && (
                            <Link to={"/"}><HomeButton /></Link>
                        )}
                    </S.RightArea>
                )}
            </S.CommonHeaderWrap>
        </>
    );
};

export default CommonHeader;