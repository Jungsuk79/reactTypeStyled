import styled, {css} from 'styled-components'
import checkArrow from '../../../assets/images/common/icCheckArrow.png';
import checkArrowOn from '../../../assets/images/common/icCheckArrowOn.png';
import checkDisable from '../../../assets/images/common/icCheckDisable.png';
import icoWishGray from '../../../assets/images/common/icoWishGray.svg';
import icoWishRed from '../../../assets/images/common/icoWishRed.svg';

const sizeStyles = {
    sm: '18px',
    md: '22px',
    lg: '28px'
};

interface CheckBoxProps {
    $iconStyle?: 'wish' | 'default';
    $size?: 'sm' | 'md' | 'lg';
}
const S = {

    CheckboxWrap: styled.div<CheckBoxProps>`
        display: inline-flex;
        align-items: center;

        & input {
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(${checkArrow});

            width: ${({ $size }) => sizeStyles[$size || 'md']};
            height: ${({ $size }) => sizeStyles[$size || 'md']};

            &:checked {
                background-image: url(${checkArrowOn});
            }
            &:disabled {
                background-image: url(${checkDisable});
            }

            /* wish일 경우 체크박스 스타일 */
            ${({ $iconStyle }) => $iconStyle === 'wish' && css`
                background-image: url(${icoWishGray});

                &:checked {
                    background-image: url(${icoWishRed});
                    transform: scale(1.1);
                    transition: transform 0.2s ease-in-out;
                }
            `}
        }

        & label {
            color: #333;
            font-size: 14px;
            cursor: pointer;
            margin-left:5px;
        }
    `
}
export default S;