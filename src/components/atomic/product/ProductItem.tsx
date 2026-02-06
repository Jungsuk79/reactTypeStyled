import React from 'react';
import {Link} from "react-router-dom";
import S from "./ProductItem.style"
import BasicCheckbox from "../checkbox/BasicCheckBox";

interface ProductItemProps {
    productUrl:string;
    productTitle:string;
    productContent?:string;
    isElipsis?:boolean;
    srcUrl:string;
    altText?:string;
    productSalePrice?:string;
    productPrice:string;
    width?:string;
}
const ProductItem = ({width,productSalePrice,productPrice,srcUrl,altText,productUrl,productTitle,productContent,isElipsis}:ProductItemProps) => {
    return (
        <S.ProductItemList $width={width}>
            <S.ProductItemWrap>
                <S.ProductItemArea>
                    <S.ProductImgWrap>
                        <S.ProductImg src={srcUrl} alt={altText} />
                        <S.WishWrap>
                            <BasicCheckbox iconType={"wish"} />
                        </S.WishWrap>
                    </S.ProductImgWrap>
                </S.ProductItemArea>
                <Link to={productUrl}>
                    <S.ProductInfoWrap>
                        <S.ProDuctTitle $isElipsis={isElipsis}>{productTitle}</S.ProDuctTitle>
                        {productContent &&(
                            <S.ProductEx $isElipsis={isElipsis}>{productContent}</S.ProductEx>
                        )}
                        <S.ProductPrice>
                            {productSalePrice}
                            <span>{productPrice}</span>
                        </S.ProductPrice>
                    </S.ProductInfoWrap>
                </Link>
            </S.ProductItemWrap>
        </S.ProductItemList>
    );
};

export default ProductItem;