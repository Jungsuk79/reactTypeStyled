import styled from 'styled-components';
import icSearch from '../../../assets/images/common/icSearch.svg'
import icCart from '../../../assets/images/common/icCart.svg'

const S = {
    CommonHeaderWrap: styled.div`
        position:relative;
        display:flex;
        align-items: center;
        justify-content: center;
        height:56px;
        padding:6px;
        background-color:#fff;
        &.main-header {
            background-color: transparent;
            h2 {
                filter:brightness(0) invert(1);
            }
            & button , a {
                filter:brightness(0) invert(1);
            }
        }
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
        display:flex;
        align-items: center;
    `,
    SearchBtn : styled.button`
        border:none;
        width:44px;
        height:44px;
        display:inline-block;
        background:url(${icSearch}) no-repeat center;
        background-size: 28px auto;
        text-indent: -9999px;
    `,
    CartWrap : styled.span`
        border:none;
        width:44px;
        height:44px;
        display:inline-block;
        background:url(${icCart}) no-repeat center;
        background-size: 28px auto;
        font-size:12px;
        padding:17px 0 13px;
        text-align:center;
        color:#333;
    `,
    HomeButton : styled.span`
        width:44px;
        height:44px;
        display:flex;
        align-items:center;
        justify-content:center;
    `
};

export default S;