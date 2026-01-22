import styled from 'styled-components';
import { flexRow, h3Bold, pageSubTitle, pageTitle } from "../../styles/common";

/**
 * S 객체 안에 모든 스타일 컴포넌트를 정의합니다.
 * 이 방식은 any 없이도 각 컴포넌트의 타입을 타입스크립트가 자동으로 추론합니다.
 */
export const S = {

    GuideSpace:styled.div`
        > * {
            margin-right:5px;
            margin-bottom:5px;
        }
    `,

    GuideWrapper: styled.div`
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 20px;
    `,

    GuideTitle: styled.h3`
        ${h3Bold}
        color: ${({ theme }) => theme.PALETTE.error};
    `,

    GuideSubTitle: styled.h4`
        ${pageTitle}
        padding-bottom: 5px;
        border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray["300"]};
        margin-top: 15px;
        margin-bottom: 10px;
        word-break: break-all;
    `,

    /* 박스 및 플렉스 요소 */
    GuideFlexBox: styled.div`
        ${flexRow}
        flex-wrap: wrap;
        gap: 10px;
    `,

    GuideBox: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    `,

    GuideBoxTitle: styled.h4`
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: bold;
        ${pageSubTitle}
    `,

    /* 폰트 및 컬러 박스 공통 */
    GuideFontBox: styled.div`
        ${flexRow}
        align-items: center;
    `,

    GuideColorBox: styled.div`
        ${flexRow}
        align-items: center;
    `,

    /* 컬러 바 상세 스타일 */
    GuideColorBarBox: styled.div`
        ${flexRow}
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    `,

    GuideColorBar: styled.div`
        min-width: 230px;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
    `,

    ColorBar: styled.div`
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ddd;
    `,

    ColorBarInfoList: styled.div`
        padding: 15px;
    `,

    ColorBarInfoTitle: styled.h4`
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        font-weight: 600;
        color: ${({ theme }) => theme.PALETTE.gray["600"]};
    `,

    /* 컬러 텍스트 정보 */
    ColorTextBox: styled.div`
        width: 150px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 15px;
        & > p {
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
            font-weight: bold;
        }
    `,

    ColorTextInfo: styled.div`
        margin-top: 10px;
        & dl {
            display: flex;
            align-items: center;
            margin-top: 5px;
            gap: 20px;
            &:first-child {
                margin-top: 0px;
            }
            & > dt {
                flex-shrink: 0;
                width: 30px;
                font-size: ${({ theme }) => theme.FONT_SIZE.h8};
                color: ${({ theme }) => theme.PALETTE.gray["900"]};
            }
            & > dd {
                font-size: ${({ theme }) => theme.FONT_SIZE.h8};
                color: ${({ theme }) => theme.PALETTE.black};
            }
        }
    `,

    /* 폰트 가이드 라인 박스 */
    GuideFontLineBox: styled.div`
        min-width: 235px;
        padding: 10px;
        border: 1px solid #ddd;
        & dt {
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        }
        & dd {
            margin-top: 5px;
            font-size: 30px;
        }
    `,

    /* 폰트 샘플 정렬용 */
    Left: styled.div`
        width: 100px;
        flex-shrink: 0;
    `,

    Right: styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.h1};
        padding-right: 30px;
        word-break: break-all;
    `,

    LeftTitle: styled.h4`
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    `,

    LeftText: styled.p`
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        color: ${({ theme }) => theme.PALETTE.gray["900"]};
        margin-top: 3px;
    `,

    /* 기타 가이드 요소 */
    ColorBox: styled.div`
        margin: 20px;
        background-color: #ddd;
        border-radius: 10px;
        display: flex;
        align-items: center;
        width: 48px;
        height: 48px;
    `,

    ButtonBox: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin-bottom: 10px;
    `,

    TagGuide: styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
    `,

    /* 탭 시스템 */
    TabList: styled.ul`
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        &::-webkit-scrollbar { display: none; }
    `,

    Tab: styled.li<{ $isActive?: boolean }>`
        display: inline-block;
        padding: 15px 10px;
        word-break: keep-all;
        white-space: nowrap;
        flex-shrink: 0;
        position: relative;
        cursor: pointer;

        ${({ $isActive }) => $isActive && `
            font-weight: 600;
            &:before {
                content: '';
                position: absolute;
                top: 15px;
                right: 4px;
                width: 4px;
                height: 4px;
                background-color: red;
                border-radius: 20px;
            }
        `}
    `,

    TabContent: styled.div`
        width: 100%;
    `,

    TabWrap: styled.div`
        width: 100%;
        &.guide-tab-custom {
            & > div:last-child { 
                padding: 10px 20px;
                border: 1px solid #333;
                overflow-x: auto;
            }
            
            ul > li {
                padding: 10px;
                border: 1px solid #333;
                border-bottom: none;
                margin-left: -1px;
                &:first-child {
                    margin-left: 0;
                }
                &.active {
                    background-color: #333;
                    color: #fff;
                    font-weight: bold;
                }
            }
        }
    `
};

export default S;