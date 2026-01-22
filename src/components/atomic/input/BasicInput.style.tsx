import styled from 'styled-components';

// 1. 스타일에서 사용할 Props 타입 정의
interface StyledProps {
    $error?: boolean;
    $success?: boolean;
    $successTxt?: string; // 추가
    $errorTxt?: string;   // 추가
    $direction?: string;
    $fontSize?: string | number;
    $padding?: string;
    $radius?: string | number;
}

// 상태에 따른 색상을 반환하는 헬퍼 함수
const getStatusColor = (props: StyledProps) => {
    if (props.$error) return '#ff4d4f';   
    if (props.$success) return '#52c41a'; 
    return '#999';                        
};

// 2. S 객체 안에 바로 정의 (가장 깔끔하고 에러 없는 방식)
export const S = {
    BasicInputWrap: styled.div`
        display: inline-block;
        vertical-align: top;
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
    `,

    BasicInputArea: styled.div<StyledProps>`
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
        gap: 5px;
        flex-direction: ${({ $direction }) => $direction === 'reverse' ? 'row-reverse' : 'row'};
        
        & label {
            font-size: ${({ $fontSize }) => 
                $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
        }

        & input {
            outline: none;
            border: 1px solid ${(props) => getStatusColor(props)};
            padding: ${({ $padding }) => $padding || '8px 12px'};
            font-size: ${({ $fontSize }) => 
                $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
            border-radius: ${({ $radius }) => 
                $radius !== undefined ? (typeof $radius === 'number' ? `${$radius}px` : $radius) : 0};

            &:focus {
                border-color: ${(props) => getStatusColor(props)};
            }
            &:disabled {
                background-color: ${({ theme }) => theme.PALETTE.gray[101]};
            }
            &::placeholder {
                color: #ccc;
                font-size: ${({ $fontSize }) => 
                    $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
            }
        }
    `
};

export default S;