import styled from 'styled-components';
import icSearch from '../../../assets/images/common/icSearch.svg'
import icCart from '../../../assets/images/common/icCart.svg'

const S = {
    CommonHeaderWrap: styled.div`
        position:relative;
        display:flex;
        align-items: center;
        justify-content: center;
        height:50px;
        background-color:#fff;
        padding-top: env(safe-area-inset-top);
    `,
    PageTitle: styled.h2`
        font-size:18px;
    `,
    BackButton : styled.button`
        position:absolute;
        top:50%;
        left:10px;
        transform: translateY(-50%);
        width:44px;
        height:44px;
        padding:10px;
        cursor: pointer;
    `,
    RightArea : styled.div`
        position:absolute;
        top:50%;
        right:10px;
        transform: translateY(-50%);
    `,
    SearchBtn : styled.button`
        border:none;
        width:30px;
        height:30px;
        display:inline-block;
        background:url(${icSearch}) no-repeat center;
        text-indent: -9999px;
        margin-right:5px;
    `,
    CartWrap : styled.button`
        border:none;
        width:30px;
        height:30px;
        display:inline-block;
        background:url(${icCart}) no-repeat center;
        font-size:12px;
        padding:10px 0;
    `
};

export default S;