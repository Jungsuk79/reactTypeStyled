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
        bottom:40px;
    `,
    ItemTitle: styled.h3<SwiperItemStyleProps>`
        font-size:20px;
        color:#fff;
    `,
    ItemText: styled.p<SwiperItemStyleProps>`
        font-size:14px;
        font-weight:400;
        margin-top:10px;
        color:#fff;
    `,
    MenuTitleWrap : styled.div`
        
    `
};
export default S;