import styled from 'styled-components';

const S = {

MainBannerWrap : styled.div`
    display:flex;
    align-items: center;
    font-size:${({theme})=>theme.FONT_SIZE.h6};
    color:#fff;
    background-color: #333;
    padding-top: env(safe-area-inset-top); /* 노치 아래로 내용물을 밀어냄 */
    height: calc(50px + env(safe-area-inset-top)); /* 기존 높이에 노치만큼 더함 */
    justify-content: center;
`

};
export default S;