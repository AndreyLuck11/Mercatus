import ProductItem from '../components/Products/ProductItem';
import React, { useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import PostService from '../API/PostServise';
import axios from 'axios';
import { useEffect } from 'react';
import ProductService from '../API/ProductService';
import { useFetching } from '../components/hooks/useFetching';
import ProductsList from '../components/Products/ProductLists';
import Loader from "../components/UI/loader/Loader";

const ProductsFromSubcategory = (props) => {
   // Костыль, не бейте палками
    const[products, setProducts] = useState([]);
    const[productImg, setProductImg] = useState([]);


    const [fetchProductsBySubcategory,  isProductsLoading, postProducts] = useFetching( async () => {
        const respons = await ProductService.fetchProductsBySubcategoryID(props.subcategory);
        setProducts(respons[0]);
        setProductImg(respons[1])
    })


    useEffect(() => {
        fetchProductsBySubcategory();
    }, [props.subcategory])


    return (
        <div>
            {isProductsLoading
                ? <Loader/>
                :<ProductsList title={props.title} products={products} productImgs={productImg}/>
            }
        </div>
    );
};

export default ProductsFromSubcategory;