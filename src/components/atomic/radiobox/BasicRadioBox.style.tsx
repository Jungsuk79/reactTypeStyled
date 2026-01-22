import styled from 'styled-components'
import radioBg from '../../../assets/images/common/icRadio.png';
import radioBgOn from '../../../assets/images/common/icRadioOn.png';
import radioBgDisable from '../../../assets/images/common/icRadioDisable.png';

const S= {

    RadioboxWrap : styled.div`
        display: inline-flex;
        align-items: center;

        & input {
            appearance: none;
            -webkit-appearance: none; /* 아이폰(Safari) 필수 */
            outline: none;
            cursor: pointer;

            width: 20px;
            height: 20px;
            display: inline-block; /* flex보다는 block 계열 추천 */

            /* 1. 기본 상태 이미지 */
            background-image: url(${radioBg});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain; /* 이미지가 잘리지 않게 설정 */
            border: none; /* 기본 보더 제거 */
            margin: 5px;

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
            padding-right: 10px;
        }
    `
}
export default S;