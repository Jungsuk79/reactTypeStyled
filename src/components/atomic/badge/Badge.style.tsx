import styled, {css} from 'styled-components';

interface BadgeProps {
    $size: string;
    $type?: string
}
const S = {
    BadgeItem: styled.span<BadgeProps>`
        /* 1. 핵심: span이 크기를 가질 수 있도록 inline-flex 설정 */
        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 2px 6px;
        font-size: 11px;
        font-weight: 600; /* 글자를 좀 더 선명하게 */
        border-radius: 2px;
        line-height: 1.2;
        white-space: nowrap;

        ${({ $size }) => {
            if ($size === 'sm') {
                return css`
                    padding: 2px 4px;
                    font-size: 11px;
                `;
            }
            if ($size === 'lg') {
                return css`
                    padding: 7px 20px;
                    font-size: 14px;
                `;
            }
            // 그 외 값이 들어올 경우 기본값 혹은 직접 수치 적용
            return css`
                padding: 5px 10px;
                font-size: 12px;
            `;
        }}

        /* 2. 배경색 분기 (로그에 찍힌 'soldout' 추가) */
        background-color: ${({ $type }) => {
            if ($type === 'new') return '#ff510c';
            if ($type === 'best') return '#333';
            if ($type === 'soldout') return '#e5e5e5'; // 품절 뱃지 배경색
            return '#d1d1d1'; // 기본값
        }};

        /* 3. 글자색 분기 */
        color: ${({ $type }) => {
            if ($type === 'new' || $type === 'best') return '#fff';
            if ($type === 'soldout') return '#999';
            return '#333';
        }};

        /* 4. 뱃지 사이의 간격 */
        & + span {
            margin-left: 4px;
        }
    `
};

export default S;