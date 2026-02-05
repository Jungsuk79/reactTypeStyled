import styled, {css} from 'styled-components';

interface ProductProps {
    $isElipsis?: boolean;
}
const S = {
    ProductList: styled.ul`
        display:flex;
        gap:2px;
        flex-wrap: nowrap;
        & li {
            width:calc(100vw/2);
        }
    `,
    ProductItemWrap : styled.div`
    `,
    ProDuctTitle : styled.div<ProductProps>`
        color:#333;
        font-size:18px;
        ${({ $isElipsis }) => $isElipsis && css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; // 한 줄 말줄임 핵심
            word-break: break-all;
        `}
    `,
    ProductEx : styled.div<ProductProps>`
        color:#999;
        font-size:14px;
        ${({ $isElipsis }) => $isElipsis && css`
            display: -webkit-box;
            -webkit-line-clamp: 3; // 💡 여기서 줄 수를 3으로 설정
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
    `,
};

export default S;