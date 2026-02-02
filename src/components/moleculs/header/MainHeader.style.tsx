import styled from 'styled-components';
import icSearch from '../../../assets/images/common/icSearch.svg'
import icCart from '../../../assets/images/common/icCart.svg'

const S = {
    MainHeaderWrap: styled.div`
        position:relative;
        display:flex;
        align-items: center;
        justify-content: center;
        height:56px;
        padding-top: env(safe-area-inset-top);
    `,
    PageTitle: styled.h2<{ $isHidden?: boolean }>`
        height:25px;
        filter:brightness(0) invert(1);
    `,
    BackButton : styled.button`
        position:absolute;
        top:50%;
        left:10px;
        transform: translateY(-50%);
        border:1px solid #333;
        padding:2px 5px;
    `,
    RightArea : styled.div`
        position:absolute;
        top:50%;
        right:10px;
        transform: translateY(-50%);
    `,
    SearchBtn : styled.button<{ $isHidden?: boolean }>`
        border:none;
        width:44px;
        height:44px;
        display:inline-block;
        background:url(${icSearch}) no-repeat center;
        background-size: 28px auto;
        text-indent: -9999px;
        filter:brightness(0) invert(1);
    `,
    CartWrap : styled.button<{ $isHidden?: boolean }>`
        border:none;
        width:44px;
        height:44px;
        display:inline-block;
        background:url(${icCart}) no-repeat center;
        background-size: 28px auto;
        font-size:12px;
        padding:16px 0;
        filter:brightness(0) invert(1);
    `

};

export default S;