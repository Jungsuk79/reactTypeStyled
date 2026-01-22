import styled, {css} from 'styled-components';

// 1. 버튼 옵션 타입 정의
export interface StyledButtonProps {
    $shape?: 'round' | 'square';
    $variant?: 'line' | 'primary' | 'primaryLine' | 'secondary' | 'secondaryLine' | 'error';
    $width?: string;
    $size?: 'sm' | 'md' | 'lg'; // Small, Medium, Large
}

export const S = {
    Button: styled.button<StyledButtonProps>`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: ${({theme}) => theme.FONT_WEIGHT.bold};
        width: ${({$width}) => $width || 'auto'};
        transition: all 0.2s ease-in-out;
        border: 1px solid transparent;

        ${({ $shape, $size }) => {
            const size = $size || 'md';
            const shape = $shape || 'square';

            // 반지름(radius) 매핑 테이블
            const radiusMap = {
                square: {
                    sm: '2px',
                    md: '4px',
                    lg: '4px',
                },
                round: {
                    sm: '5px',   // 작은 버튼은 조금만 둥글게
                    md: '15px',  // 중간은 적당히
                    lg: '20px',  // 큰 버튼은 확실하게 둥글게
                },
            };

            return css`
                border-radius: ${radiusMap[shape][size]};
            `;
        }}

        /* --------------------------------------------------
           [Size] sm, md, lg 에 따른 폰트 및 패딩 설정
        -------------------------------------------------- */
        ${({$size, theme}) => {
            switch ($size) {
                case 'sm':
                    return css`
                        font-size: ${theme.FONT_SIZE.h8}; // 12px
                        padding: 5px 15px;
                    `;
                case 'lg':
                    return css`
                        font-size: ${theme.FONT_SIZE.h5}; // 20px
                        padding: 12px 35px;
                    `;
                case 'md':
                default:
                    return css`
                        font-size: ${theme.FONT_SIZE.h7}; // 14px
                        padding: 10px 20px;
                    `;
            }
        }}
        
        ${({$variant, theme}) => !$variant && css`
            background-color: ${theme.PALETTE.gray[300]};
            border-color: ${theme.PALETTE.gray[300]};
            color: ${theme.PALETTE.white};

            &:hover {
                background-color: ${theme.PALETTE.black}; // 호버 시 더 진하게
                border-color: ${theme.PALETTE.black};
            }
        `}
            /* line */
        ${({$variant, theme}) => $variant === 'line' && css`
            background-color: ${theme.PALETTE.white};
            border-color: ${theme.PALETTE.gray[300]};
            color: ${theme.PALETTE.gray[300]};

            &:hover {
                background-color: ${theme.PALETTE.gray[101]};
            }
        `}
            /* Primary */
        ${({$variant, theme}) => $variant === 'primary' && css`
            background-color: ${theme.PALETTE.primary.main};
            border-color: ${theme.PALETTE.primary.main};
            color: ${theme.PALETTE.white};

            &:hover {
                background-color: ${theme.PALETTE.primary.dark};
            }
        `}
            /* PrimaryLine */
        ${({$variant, theme}) => $variant === 'primaryLine' && css`
            background-color: transparent;
            border-color: ${theme.PALETTE.primary.main};
            color: ${theme.PALETTE.primary.main};

            &:hover {
                background-color: ${theme.PALETTE.primary.light};
            }
        `}
            /* Secondary */
        ${({$variant, theme}) => $variant === 'secondary' && css`
            background-color: ${theme.PALETTE.secondary.main};
            border-color: ${theme.PALETTE.secondary.main};
            color: ${theme.PALETTE.white};

            &:hover {
                background-color: ${theme.PALETTE.secondary.dark};
            }
        `}
            /* SecondaryLine */
        ${({$variant, theme}) => $variant === 'secondaryLine' && css`
            background-color: transparent;
            border-color: ${theme.PALETTE.secondary.main};
            color: ${theme.PALETTE.secondary.main};

            &:hover {
                background-color: ${theme.PALETTE.secondary.light};
            }
        `}
            /* Error */
        ${({$variant, theme}) => $variant === 'error' && css`
            background-color: ${theme.PALETTE.error};
            border-color: ${theme.PALETTE.error};
            color: ${theme.PALETTE.white};

            &:hover {
                opacity: 0.9;
            }
        `}
        &:disabled {
            background-color: ${({theme}) => theme.PALETTE.gray[301]};
            border-color: ${({theme}) => theme.PALETTE.gray[301]};
            cursor: not-allowed;
            opacity: 0.6;
        }
    `
};