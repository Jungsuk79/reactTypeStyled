import styled, { css } from 'styled-components';

interface TagProps {
    $size: 'small' | 'medium' | 'large';
    $type: 'primary' | 'error' | 'gray' | 'line' | 'black';
}

// 사이즈별 스타일 정의
const sizeStyles = {
        small: css`
        padding: 2px 8px;
        font-size:${({theme}) => theme.FONT_SIZE.h9};
        height: 20px;
    `,
        medium: css`
        padding: 4px 12px;
        font-size:${({theme}) => theme.FONT_SIZE.h7};
        height: 28px;
    `,
        large: css`
        padding: 6px 16px;
        font-size:${({theme}) => theme.FONT_SIZE.h5};
        height: 36px;
    `
    };

const typeStyle = {
    primary: css`
        background-color:${({theme}) => theme.PALETTE.primary["main"]};
        color:#fff;
    `,
    error: css`
        background-color:${({theme}) => theme.PALETTE.error};
        color:#fff;
    `,
    gray: css`
        background-color:${({theme}) => theme.PALETTE.gray[900]};
        color:#fff;
    `,
    line: css`
        background-color:#fff;
        color:${({theme}) => theme.PALETTE.gray[300]};
        border:1px solid ${({theme}) => theme.PALETTE.gray[900]};
    `,
    black: css`
        background-color:${({theme}) => theme.PALETTE.gray[300]};
        color:${({theme}) => theme.PALETTE.white};
        border:1px solid ${({theme}) => theme.PALETTE.gray[300]};
    `
}

const S = {

Tag : styled.span<TagProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-weight: 500;

    // size props에 따른 스타일 적용
    ${(props) => sizeStyles[props.$size] || sizeStyles.medium}
    
    // type props에 따른 스타일 적용
    ${(props) => typeStyle[props.$type] || typeStyle.gray}
`
};

export default S;