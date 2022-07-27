import React from 'react';
import ProductItem from './ProductItem';
import classes from './ProductLists.module.css'

const ProductsList = (props) => {

    return (
        <div>
            <h1 style={{textAlign:'center'}}>{props.title}</h1>
        <div className={classes.productList}>
            {props.products.map((product, i) =>
                <ProductItem product={product} key={product.id} image={props.productImgs[i]}/>
            )}
        </div>
        </div>
    );
};

export default ProductsList;