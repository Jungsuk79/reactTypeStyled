import React from 'react';
import {Link} from "react-router-dom";
import S from "./ProductItem.style"
import BasicCheckbox from "../checkbox/BasicCheckBox";
import Badge from "../badge/Badge";

interface BadgeItem {
    label: string;
    type: string;
}

interface ProductItemProps {
    isCheckbox?:boolean;
    isWish?:boolean;
    badges?: BadgeItem[];
    isElipsis?:boolean;
    productUrl:string;
    srcUrl:string;
    altText?:string;
    productSalePrice?:string;
    productPrice?:string;
    productTitle:string;
    productContent?:string;
    width?:string;
}
const ProductItem = ({
     isCheckbox=true,
     isWish=true,
     badges,
     isElipsis,
     productUrl,
     srcUrl,
     altText,
     productSalePrice,
     productPrice,
     productTitle,
     productContent,
     width
}:ProductItemProps) => {
    return (
        <S.ProductItemList $width={width}>
            <S.ProductItemWrap>
                <S.ProductItemArea>
                    <S.ProductImgWrap>
                        {isCheckbox &&(
                            <S.CheckWrap>
                                <BasicCheckbox />
                            </S.CheckWrap>
                        )}
                        <S.ProductImg src={srcUrl} alt={altText} />
                        {isWish &&(
                            <S.WishWrap>
                                <BasicCheckbox iconType={"wish"} />
                            </S.WishWrap>
                        )}
                    </S.ProductImgWrap>
                </S.ProductItemArea>
                <Link to={productUrl}>
                    <S.ProductInfoWrap>
                        <S.ProDuctTitle $isElipsis={isElipsis}>{productTitle}</S.ProDuctTitle>
                        {productContent &&(
                            <S.ProductEx $isElipsis={isElipsis}>{productContent}</S.ProductEx>
                        )}
                        {productPrice &&(
                            <S.ProductPrice>
                                {productSalePrice}
                                <span>{productPrice}</span>
                            </S.ProductPrice>
                        )}
                        {badges && badges.length > 0 && (
                            <S.BadgeWrap>
                                {badges.map((badge, idx) => (
                                    <Badge
                                        key={idx}
                                        label={badge.label}
                                        type={badge.type}
                                    />
                                ))}
                            </S.BadgeWrap>
                        )}
                    </S.ProductInfoWrap>
                </Link>
            </S.ProductItemWrap>
        </S.ProductItemList>
    );
};

export default ProductItem;