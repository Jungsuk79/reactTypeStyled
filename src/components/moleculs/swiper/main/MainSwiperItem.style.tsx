import styled from 'styled-components';

export interface SwiperItemStyleProps {

}

const S = {
    ItemWrapper: styled.div<SwiperItemStyleProps>`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        font-size: 1.5rem;
        font-weight: bold;
        position: relative;
    `,
    ImageWrap: styled.div<SwiperItemStyleProps>`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Image: styled.img<SwiperItemStyleProps>`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit:cover;
    `,
    ItemTextBox: styled.div<SwiperItemStyleProps>`
        position: absolute;
        left:20px;
        bottom:110px;
    `,
    ItemTitle: styled.h3<SwiperItemStyleProps>`
        font-size:30px;
        color:#fff;
        word-break: break-all;
        white-space: pre-wrap;
        line-height: 150%;
    `,
    ItemText: styled.h4<SwiperItemStyleProps>`
        font-size:20px;
        font-weight:400;
        color:#fff;
        margin-top:10px;
        word-break: break-all;
        white-space: pre-wrap;
        line-height: 150%;
    `
};
export default S;