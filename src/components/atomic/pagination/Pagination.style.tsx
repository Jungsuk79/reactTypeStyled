import styled from 'styled-components';
import pagingArrow from '../../../assets/images/common/icPagingArrow.png';

const S = {
PaginationWrap : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 20px 0;
`,

PageNum : styled.button`
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        background: ${({theme}) => theme.PALETTE.primary["main"]}; /* 혹은 살짝 진한 색 */
        opacity: 0.9;
        color: #fff;
    }

    &.active {
        background:${({theme}) => theme.PALETTE.primary["main"]};
        color: #fff;
        border-color:${({theme}) => theme.PALETTE.primary["main"]};
    }
`,
PageArrow : styled.button`
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    font-weight: bold;
    color: #999;
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 4px;
    background: url(${pagingArrow}) center no-repeat;
    &.arrow-next {
        rotate: 180deg;
    }
    &:disabled {
        cursor: default;
        opacity: 0.5;
    }
`
};

export default S;