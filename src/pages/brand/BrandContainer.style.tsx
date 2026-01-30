import styled from 'styled-components';
const S = {
    BrandContent : styled.div`
    `,
    PageTitle: styled.div`
        display:flex;
        line-height: 1;
        font-size: ${({ theme }) => theme.FONT_SIZE.h1};
        font-weight:600;
        padding:10px 10px;
        & span {
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
            align-self: start;
            margin-top:8px;
        }
    `,
    BrandSwiperWrap: styled.div`
       & .swiper-wrapper {
           padding:0 10px;
       } 
    `
};
export default S;