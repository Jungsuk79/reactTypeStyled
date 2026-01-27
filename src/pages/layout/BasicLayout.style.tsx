import styled from 'styled-components';

export interface BasicLayoutProps {
    $isHidden: boolean
}

const S = {

LayoutWrap : styled.div`
    display:flex;
    flex-direction: column;
    height: 100dvh;
    width: 100%;
    overflow: hidden; /* 전체 바디 스크롤 방지 */
    position: relative;
`,

StickHeader: styled.div<BasicLayoutProps>`
    position: sticky;
    /* 중요: top 0일 때는 보이고, -100%일 때는 탭 메뉴에게 자리를 양보하며 숨겨짐 */
    top: ${({ $isHidden }) => ($isHidden ? '-100px' : '0px')};
    z-index: 100;
`,

LayoutContent : styled.div`
    flex: 1; /* 남은 공간을 모두 차지함 */
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
`,
FolatingWrap : styled.div<BasicLayoutProps>`
    display: flex;
    flex-direction: column;
    position:fixed;
    bottom:0;
    right:10px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isHidden }) => $isHidden ? 'translateY(60px)' : 'translateY(0)'};
`,
FolatingContent: styled.div`
    position: absolute;
    right:0;
    bottom:90px;
    & button {
        display: block;
        width:40px;
        height:40px;
        & + button {
            margin-top:10px;
        }
    }
`

};
export default S;