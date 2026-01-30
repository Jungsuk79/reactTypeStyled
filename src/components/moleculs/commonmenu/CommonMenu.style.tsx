import styled from 'styled-components';

const S = {

NavWrap : styled.div<{$isHidden: boolean}>`
    /* 애니메이션 설정 */
    transition: transform 0.3s ease-in-out;
    /* 내릴 때(true)는 아래로 100% 밀어 숨김, 올릴 때(false)는 0 */
    transform: ${({ $isHidden }) => ($isHidden ? 'translateY(100%)' : 'translateY(0)')};
    z-index: 200;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
`,

NavList : styled.ul`
    width:100%;
    display:flex;
    align-items: center;
    gap:10px;
    height:70px;
    padding:0 18px;
    justify-content: space-between;
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
            display:flex;
            flex-direction: column;
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