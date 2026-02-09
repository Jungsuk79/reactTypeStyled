import styled from "styled-components";

const S = {
    PageTitle : styled.div`
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
    SubTitle: styled.div`
        font-size:16px;
        padding:0 10px;
        font-weight:500;
        margin-bottom:10px;
    `,
    BrandList: styled.ul`
        display:flex;
        gap:2px;
        flex-wrap: wrap;
    `,

};
export default S;