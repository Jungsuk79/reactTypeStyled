import styled from 'styled-components';
const S = {
    BrandContent : styled.div`
    `,
    PageTitle: styled.div`
        display:flex;
        line-height: 1;
        font-size: ${({ theme }) => theme.FONT_SIZE.h1};
        font-weight:600;
        padding:10px 10px 20px;
        & span {
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
            align-self: start;
            margin-top:8px;
        }
    `,
    BrandSwiperEx: styled.div`
        margin:10px 10px;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height:min(calc((100vw - 22px) / 3), 270px);
        & div {
            text-align: center;
            & span {
                color:${({ theme }) => theme.PALETTE.primary.main};
            }
        }
    `
};
export default S;