import styled from 'styled-components';
import icArrow from "../../../assets/images/common/icArrow.svg";

const S = {
    FaqList: styled.div`
        position: relative;
        padding:10px 0 10px;
        border-bottom:1px solid #ededed;
    `,
    FaqType: styled.div`
        font-size: 12px;
        color:#999;
    `,
    FaqTitle: styled.div`
        padding:5px 0;
        font-size: 14px;
        color:#000;
        font-weight:500;
        &:before {
            content:"";
            width:10px;
            height:10px;
            background:url(${icArrow}) center no-repeat;
            position:absolute;
            top:30px;
            right:0px;
        }
        &.active:before {
            transform:rotate(180deg);
        }
        &.active + div {
            display:block;
        }
    `,
    FaqContent: styled.div`
        display:none;
        padding:20px;
        font-size: 14px;
        background-color:#ededed;
    `,
}
export default S;