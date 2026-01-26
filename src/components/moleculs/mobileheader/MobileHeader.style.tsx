import styled from 'styled-components';

const S = {
HeaderWrap : styled.div`
    
`,
NavWrap : styled.ul`
    width:100%;
    display:flex;
    align-items: center;
    gap:10px;
    height:70px;
    padding:0 18px;
    justify-content: space-between;
    border-top:1px solid #fff;
    background-color:#000;
    & li {
        width: 55px;
        height: 46px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position:relative;
        gap:5px;
        & a {
            display:inline-block;
            color:#fff;
            text-align: center;
            font-size: ${({ theme }) => theme.FONT_SIZE.h9};
        }
    }
`,
MenuIcon : styled.span`
    display:inline-block;
    height:26px;
`
};
export default S;