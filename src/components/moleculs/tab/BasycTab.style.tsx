import styled from 'styled-components';

const S:any = {};

S.TabList = styled.ul`
    width:100%;
    display:flex;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: auto;
`
S.Tab = styled.li<{ $isActive?: boolean }>`
    display: inline-block;
    padding: 15px 10px;
    word-break: keep-all;
    white-space: nowrap;
    flex-shrink: 0;
    position:relative;
    ${({ $isActive }) => $isActive && `
        font-weight:600;
    `}
`

S.TabContent = styled.div`
`

S.TabWrap = styled.div`
    width:100%;
    &.guide-tab-custom {
        > ${S.TabContent} {
            padding:10px 20px;
            border: 1px solid #333; /* 컨텐츠 박스 테두리 강조 */
            overflow: hidden;
            overflow-x: auto;
        }
        > ${S.TabList} > ${S.Tab} {
            padding:10px;
            border:1px solid #333;
            border-bottom:none;
            margin-left:-1px;
            &:first-child {
                margin-left:0;
            }
            &.active {
                background-color: #333;
                color: #fff;
                font-weight: bold;
            }
        }
    }
`;

export default S;