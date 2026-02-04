import styled from 'styled-components';

// 1. 스타일에서 사용할 Props 타입 정의
interface StyledProps {
    $error?: boolean;
    $success?: boolean;
    $successTxt?: string; // 추가
    $errorTxt?: string;   // 추가
    $fontSize?: string | number;
    $padding?: string;
    $radius?: string | number;
    $fullSize?: boolean;
    $reset?: boolean;
}

// 상태에 따른 색상을 반환하는 헬퍼 함수
const getStatusColor = (props: StyledProps) => {
    if (props.$error) return '#ff4d4f';   
    if (props.$success) return '#ff510c';
    return '#999';                        
};

// 2. S 객체 안에 바로 정의 (가장 깔끔하고 에러 없는 방식)
export const S = {
    BasicInputWrap: styled.div<StyledProps>`
        display: block;
        vertical-align: top;
        width:auto;
        & .under-txt {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
            &.success {
                color: ${({ theme }) => theme.PALETTE.primary["main"]};
            }
            &.error {
                 color: ${({ theme }) => theme.PALETTE.error};
            }
        }
        ${({ $fullSize }) => $fullSize && `
            display: block;
            & input {
                width:100%;
            }
        `}
    `,

    BasicInputArea: styled.div<StyledProps>`
        position: relative;
        display: block;
        vertical-align: middle;
        
        & label {
            font-size: ${({ $fontSize }) => 
                $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
        }

        & input {
            outline: none;
            border:none;
            border-bottom: 1px solid ${(props) => getStatusColor(props)};
            padding: ${({ $padding }) => $padding || '8px 12px'};
            padding-right:60px;
            font-size: ${({ $fontSize }) => 
                $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
            border-radius: ${({ $radius }) => 
                $radius !== undefined ? (typeof $radius === 'number' ? `${$radius}px` : $radius) : 0};

            &:focus {
                border-color: ${(props) => getStatusColor(props)};
            }
            &:disabled {
                background-color: ${({ theme }) => theme.PALETTE.gray[201]};
            }
            &::placeholder {
                color: #ccc;
                font-size: ${({ $fontSize }) => 
                    $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
            }
        }

        & .reset {
            display: flex;
            gap: 4px;
            align-items: center;
            position:absolute;
            top:50%;
            right:5px;
            transform: translateY(-50%);

            button {
                width: 20px;
                height: 20px;
                border: none;
                background: #ccc; /* 테스트용 색상 */
                border-radius: 50%;
                cursor: pointer;
                padding: 0;

                &:hover {
                    background: #999;
                }
            }
        }
    `
};

export default S;