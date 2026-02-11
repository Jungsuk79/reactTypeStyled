import styled from 'styled-components';

interface StyledProps {
    $fontSize?: string | number;
    $radius?: string | number;
    $fullSize?: boolean;
    $reset?: boolean;
}

export const S = {
    BasicInputWrap: styled.div<StyledProps>`
        display:inline-block;
        ${({ $fullSize }) => $fullSize && `
            display: block;
        `}
    `,

    BasicInputArea: styled.div<StyledProps>`
        position: relative;
        display: inline-block;
        width:100%;
        vertical-align: middle;
        
        & label {
            position:absolute;
            top:0;
            left:0;
            font-size: ${({ $fontSize }) => 
                    $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
            & + input {
                padding-top:30px;
            }
        }

        & input {
            width:100%;
            outline: none;
            border:none;
            border-bottom: 1px solid #999;
            padding:16px 0;
            font-size: ${({ $fontSize }) => 
                $fontSize !== undefined ? (typeof $fontSize === 'number' ? `${$fontSize}px` : $fontSize) : `14px`};
            border-radius: ${({ $radius }) => 
                $radius !== undefined ? (typeof $radius === 'number' ? `${$radius}px` : $radius) : 0};

            &:disabled {
                background-color: ${({ theme }) => theme.PALETTE.gray[101]};
                &::placeholder {
                    color: #fff;
                }
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
            right:5px;
            bottom:15px;

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