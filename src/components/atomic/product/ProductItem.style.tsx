import styled, {css} from 'styled-components';

interface ProductProps {
    $isElipsis?: boolean;
    $width?:string;
    $type?: string;
}
const S = {
    ProductItemList: styled.li<ProductProps>`
        width:calc(100%/2 - 1px);
        width: ${({ $width }) => $width ?? 'calc(100%/2 - 1px)'};
    `,
    ProductItemArea: styled.div`
        position:relative;
        width:100%;
        height:100%;
        background-color:#f4f4f4;
    `,
    ProductImgWrap:styled.div`
        width: 100%;
        mix-blend-mode: darken;
        aspect-ratio: 3 / 4;
    `,
    ProductImg:styled.img`
        width:100%;
        height:100%;
        object-fit: contain;
    `,
    CheckWrap:styled.div`
        position:absolute;
        left:10px;
        top:10px;
    `,
    WishWrap:styled.div`
        position:absolute;
        right:10px;
        top:10px;
    `,
    ProductItemWrap: styled.div`
    `,
    ProductInfoWrap:styled.div`
        padding:10px;
    `,
    ProDuctTitle : styled.div<ProductProps>`
        color:#000;
        font-size:15px;
        font-weight:500;
        ${({ $isElipsis }) => $isElipsis && css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; // 한 줄 말줄임 핵심
            word-break: break-all;
        `}
    `,
    ProductEx : styled.div<ProductProps>`
        margin-top:5px;
        color:#999;
        font-size:13px;
        ${({ $isElipsis }) => $isElipsis && css`
            display: -webkit-box;
            -webkit-line-clamp: 2; // 💡 여기서 줄 수를 3으로 설정
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
    `,
    ProductPrice:styled.div`
        margin-top:5px;
        color:#333;
        font-weight:600;
        & span {
            color:#999;
            margin-left:5px;
            font-weight:400;
        }
    `,
    BadgeWrap:styled.div`
        margin-top:10px;
    `,
};

export default S;