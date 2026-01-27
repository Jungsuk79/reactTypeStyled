import React from 'react';
import S from "./MainHeader.style";
interface MainHeaderProps {
}
const MainHeader = () => {
    return (
        <S.MainHeaderWrap>
            <S.PageTitle>메인로고</S.PageTitle>
            <S.RightArea>
                <S.SearchBtn>검색</S.SearchBtn>
                <S.CartWrap>0</S.CartWrap>
            </S.RightArea>
        </S.MainHeaderWrap>
    );
};

export default MainHeader;