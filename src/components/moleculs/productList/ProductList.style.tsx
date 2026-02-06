import styled, {css} from 'styled-components';

interface ProductProps {
    $isElipsis?: boolean;
    $width?:string;
}
const S = {
    ProductList: styled.ul`
        display:flex;
        gap:2px;
        flex-wrap: wrap;
    `,
};

export default S;