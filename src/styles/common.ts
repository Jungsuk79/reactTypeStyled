import { css, RuleSet } from "styled-components";

/**
 * 1. 테마를 사용하지 않는 공통 스타일
 * RuleSet은 styled-components에서 제공하는 CSS 묶음 타입입니다.
 */
export const flexCenter: RuleSet = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexRow: RuleSet = css`
  display: flex;
  flex-direction: row;
`;

export const flexBetweenRow: RuleSet = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const flexBetweenColumn: RuleSet = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const flexCenterRow: RuleSet = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const flexCenterColumn: RuleSet = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const h1Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

export const h1Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.black};
`;

export const h2Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  line-height: ${({ theme }) => theme.FONT_LINE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const h3Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const h4Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const pageTitle = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.semiBold};
`;

export const pageSubTitle = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.semiBold};
`;

export const text = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
`;

export const smallText = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
`;

export const tinyText = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
`;