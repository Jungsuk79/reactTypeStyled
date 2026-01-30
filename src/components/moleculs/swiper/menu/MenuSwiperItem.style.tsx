import styled from 'styled-components';

export interface SwiperItemStyleProps {
    $defaultOn?:boolean;
}

const S = {
    MenuTitleWrap: styled.div<SwiperItemStyleProps>`
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

    MenuTitle : styled.div<SwiperItemStyleProps>`
        position:relative;
        font-size:16px;
        padding:19px 10px;

        ${props =>
                props.$defaultOn &&
                `
            &::after {
                content: '';
                position: absolute;
                top: 17px;
                right: 4px;
                width: 4px;
                height: 4px;
                background-color: red;
                border-radius:50%;
            }
        `}
    `
};
export default S;