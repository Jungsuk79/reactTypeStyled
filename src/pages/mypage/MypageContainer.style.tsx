import styled from 'styled-components';

const S = {
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
    SubTitle :  styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.h6};
        font-weight:600;
    `,
    CartContainer : styled.div`
        padding:0 10px;
    `,
    Nodata : styled.div`
        display:flex;
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:100%;
        max-height:50%;
    `
}
export default S;