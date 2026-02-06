import styled from 'styled-components'
import radioBg from '../../../assets/images/common/icRadio.png';
import radioBgOn from '../../../assets/images/common/icRadioOn.png';
import radioBgDisable from '../../../assets/images/common/icRadioDisable.png';

const sizeStyles = {
    sm: '18px',
    md: '22px',
    lg: '28px'
};
interface BasicRadioBoxProps {
    $size: 'sm' | 'md' | 'lg';
}
const S= {

    RadioboxWrap : styled.div<BasicRadioBoxProps>`
        display: inline-flex;
        align-items: center;

        & input {
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
            display: inline-block;
            width: ${({ $size }) => sizeStyles[$size || 'md']};
            height: ${({ $size }) => sizeStyles[$size || 'md']};

            background-image: url(${radioBg});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            border: none;

            &:checked {
                position: relative;
                background: url(${radioBgOn}) center no-repeat;
                background-size: 20px auto;
            }

            &:disabled {
                background: url(${radioBgDisable}) center no-repeat;
                background-size: 20px auto;
            }
        }

        & label {
            color: #333;
            font-size: 14px;
            margin-left: 5px;
        }
    `
}
export default S;