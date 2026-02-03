import styled from 'styled-components';
import bgfooter from '../../../assets/images/common/bgFooter.svg';

const S = {
    FooterWrap: styled.div`
        padding:66px 0 0;
        background:url(${bgfooter}) repeat-x center top;
        color:#fff;
    `,
    FooterCont: styled.div`
        padding: 0 10px 80px;
        background-color:#000;
        color:#fff;
    `,
    Copyright: styled.div`
        font-size:30px;
        color:#fff;
    `,
    FooterMenu: styled.ul`
        text-align:right;
        margin-top:40px;
        & li {
            margin-top:8px;
            & a {
                color: #fff;
            }
        }
        
    `,
    InfoText: styled.div`
        margin-top:5px;
        font-size:11px;
        color:#999;
    `
}
export default S;