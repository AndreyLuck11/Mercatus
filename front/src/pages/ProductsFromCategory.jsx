import React from 'react';
import ProductItem from '../components/Products/ProductItem';
import { useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import PostService from '../API/PostServise';
import axios from 'axios';
import { useEffect } from 'react';
import ProductService from '../API/ProductService';
import { useFetching } from '../components/hooks/useFetching';
import ProductsList from '../components/Products/ProductLists';
import Loader from "../components/UI/loader/Loader";
const ProductsFromCategory = (props) => {
    const[products, setProducts] = useState([]);
    const[productImg, setProductImg] = useState([]);

    


    const [fetchProductsByCategory, isProductsLoading, postProducts] = useFetching( async () => {
        const respons = await ProductService.fetchProductsByCategoryID(props.category);
        setProducts(respons[0]);
        setProductImg(respons[1])
    })

    

    useEffect(() => {
        fetchProductsByCategory();
    }, [props.category])


    // 
    return (
        <div>
            {isProductsLoading
                ?<Loader/>
                :<ProductsList title={props.title} products={products} productImgs={productImg} />
            }
        </div>
    );
};

export default ProductsFromCategory;