import React, {useEffect, useState} from 'react';
import {useFetching} from "../components/hooks/useFetching";
import ProductService from "../API/ProductService";
import Loader from "../components/UI/loader/Loader";
import ProductsList from "../components/Products/ProductLists";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const ProdustsByName = (props) => {

    const[products, setProducts] = useState([]);
    const[productImg, setProductImg] = useState([]);
    const [title, setTitle] = useState('');

    const [fetchProductsByTitle, isProductsLoading, postProducts] = useFetching( async () => {
        const respons = await ProductService.fetchProductsByTitle(title);
        setProducts(respons[0]);
        setProductImg(respons[1])
    })


    // useEffect(() => {
    //     fetchProductsByTitle();
    // }, [title])


    //
    return (
        <div >
        <div className="container">
            <div className="input__wrapper" style={{display:'flex', justifyContent:'center'}}>
                <MyInput
                    style={{width:'80%', display:'table'}}
                    value = {title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='Введите название товара'
                />
            </div>
            <MyButton onClick={fetchProductsByTitle}>Найти</MyButton>
            {isProductsLoading
                ?<Loader/>
                :<ProductsList title={props.title} products={products} productImgs={productImg} />
            }
        </div>
        </div>
    );
};

export default ProdustsByName;