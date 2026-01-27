import React from 'react';
import { HeaderProps } from '../../../types/layout';
import S from './CommonHeader.style'

interface CommonHeaderProps {
    headerProps: HeaderProps; // 여기서는 null을 허용하지 않게 설정
}

const CommonHeader = ({headerProps}:CommonHeaderProps) => {
    return (
        <>
            <S.CommonHeaderWrap>
                {headerProps.showBack &&(
                    <S.BackButton onClick={() => window.history.back()}>뒤로가기</S.BackButton>
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