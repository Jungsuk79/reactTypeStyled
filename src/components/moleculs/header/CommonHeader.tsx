import React from 'react';
import { HeaderProps } from '../../../types/layout';
import S from './CommonHeader.style'

interface CommonHeaderProps {
    headerProps: HeaderProps; // 여기서는 null을 허용하지 않게 설정
}

const CommonHeader = ({headerProps}:CommonHeaderProps) => {

    const BackButton =() =>(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9471 3.46667L2.91003 11.5018L22.998 11.5018V12.5018L2.90906 12.5018L10.946 20.537L10.238 21.2362L1.70303 12.701L1.00305 11.9921L1.70303 11.287L10.239 2.74792L10.9471 3.46667Z" fill="black"></path></svg>
    )

    return (
        <>
            <S.CommonHeaderWrap>
                {headerProps.showBack &&(
                    <S.BackButton onClick={() => window.history.back()}>
                        <BackButton />
                    </S.BackButton>
                )}
                <S.PageTitle>{headerProps.title}</S.PageTitle>
                <S.RightArea>
                    <S.SearchBtn>검색</S.SearchBtn>
                    <S.CartWrap>0</S.CartWrap>
                </S.RightArea>
            </S.CommonHeaderWrap>
        </>
    );
};

export default CommonHeader;