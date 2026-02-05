import React from 'react';
import {Link} from "react-router-dom";
import S from "./Product.style"

interface ProductItemProps {
    productUrl:string;
    productTitle:string;
    productContent:string;
    isElipsis?:boolean;
}
const ProductItem = ({productUrl,productTitle,productContent,isElipsis}:ProductItemProps) => {
    return (
        <li>
            <Link to={productUrl}>
                <S.ProductItemWrap>
                    <S.ProDuctTitle $isElipsis={isElipsis}>{productTitle}</S.ProDuctTitle>
                    <S.ProductEx $isElipsis={isElipsis}>{productContent}</S.ProductEx>
                </S.ProductItemWrap>
            </Link>
        </li>
    );
};

export default ProductItem;