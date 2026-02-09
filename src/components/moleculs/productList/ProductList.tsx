import React from 'react';
import ProductItem from "../../atomic/product/ProductItem";
import S from "./ProductList.style";
import {sampleProducts} from "../../../assets/mocks/guide.mock";

const ProductList = () => {

    return (
        <S.ProductList>
            {sampleProducts.map((product,idx) => (
                <ProductItem
                    productPrice={product.price}
                    productSalePrice={product.salePrice}
                    altText={product.alt}
                    srcUrl={product.src}
                    isElipsis={true}
                    productUrl={product.url}
                    productTitle={product.title}
                    productContent={product.content}
                    isCheckbox={false}
                />
            ))}
        </S.ProductList>
    );
};

export default ProductList;