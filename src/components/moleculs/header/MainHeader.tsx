import React from 'react';
import S from "./MainHeader.style";

interface MainHeaderProps {
    isHidden?: boolean; // BasicLayout에서 받을 이름
}

const MainHeader = ({ isHidden }: MainHeaderProps) => {
    const MainLogo = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="132" height="25" viewBox="0 0 220 40"><g fill="#fff"><path d="M88.6.7c-3.9 1-9.3 5.4-11.6 9.5C69.9 22.8 79.5 39 93.9 39c5 0 11.7-2.6 14-5.4 1.3-1.5 1.1-2-1.1-4.3l-2.6-2.6-2.7 2.2c-3.6 2.8-10.3 2.8-13.8.1-3.7-2.9-5.2-8.3-3.8-13.1 2.2-7.4 10-10.1 16.8-5.9l3.2 1.9 2.6-3.1 2.7-3.2-2.4-1.8C102.7.6 94.5-.8 88.6.7M0 19.5V38h8V23h6.8c6.6 0 9.2 1 9.2 3.6S20.8 31 16.4 31 12 31 12 34.5V38h5.6c3.1 0 7.1-.7 8.9-1.5 6.9-3.4 7.3-12.7.7-16.8-1.5-.9-2.1-1.7-1.5-1.7 2.2 0 4.5-5.9 3.8-9.7C28.4 2.5 24.6 1 11.3 1H0zm20.4-9.9c3.5 3.5.4 6.4-7 6.4H8V8h5.4c3.6 0 6 .5 7 1.6M36.2 14.4c.6 14.7 1.6 17.9 7.1 22 4.1 3 15.3 3 19.4 0 5.5-4.2 6.6-7.5 7.1-22L70.3 1H61v12.4c0 11-.2 12.6-2.1 15-1.6 2-2.9 2.6-5.9 2.6s-4.3-.6-5.9-2.6c-1.9-2.4-2.1-4-2.1-15V1h-9.3zM114 19.5V38h9v-5.8c0-4.4.5-6.3 1.8-7.5 1-1 2.1-1.7 2.3-1.7.3 0 2.9 3.4 5.8 7.5l5.4 7.5h4.9c5.7 0 6 1-3.5-11.8l-7-9.3 2.4-2.7c1.3-1.5 4.6-5.1 7.3-8l5-5.2h-4.9c-5 0-5.1 0-12.2 7.7l-7.2 7.8-.1-7.8V1h-9zM154 20v19h28v-8h-20v-8h20v-7h-20V8h20V1h-28zM189 4.5V8h11v30h7.9l.3-14.8.3-14.7 5.8-.3 5.7-.3V1h-31z"></path></g></svg>
    );
    return (
        <S.MainHeaderWrap>
            <S.PageTitle $isHidden={isHidden}>
                <MainLogo />
            </S.PageTitle>

            <S.RightArea>
                <S.SearchBtn $isHidden={isHidden}>검색</S.SearchBtn>
                <S.CartWrap $isHidden={isHidden}>0</S.CartWrap>
            </S.RightArea>
        </S.MainHeaderWrap>
    );
};

export default MainHeader;