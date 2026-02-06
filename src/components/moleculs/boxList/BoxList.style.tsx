import styled, {css} from 'styled-components';

const S = {
    BoxListItem:styled.li`
        width:calc(100%/3 - 3.5px);
        & img {width:100%;height:100%;object-fit: cover}
        border:1px solid #333;
    `,
};

export default S;