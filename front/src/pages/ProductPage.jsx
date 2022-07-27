import React from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../API/ProductService';
import { useFetching } from '../components/hooks/useFetching';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../components/UI/loader/Loader';
import '../styles/pages_css/ProductPage.css'
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";



const ProductPage = () => {
    const params = useParams();

    const[modal, setModal] = useState(false)
    const[modalImg, setModalImg] = useState(26)

    const [product, setProduct] = useState({});
    const [imgs, setImgs ] = useState([]);
    const [fetchProductById, isLoading, error] = useFetching( async (id) => {
        const response = await ProductService.fetchProductById(params.id);
        setProduct(response[0]);
        setImgs(response[1]);
    })

    useEffect(() => {
        fetchProductById(params.id)
        
    },[])

    function gg(imgs){
        setModal(true);
        setModalImg(imgs);
    }
    return (
        <div className='product-page'>
            <div className='column'>
                {imgs.map((imgs, i) =>
                    <img className='image' onClick={() => gg(imgs)} src={'http://localhost:8080/get/image/' + imgs} alt="gg" key={imgs}/>
                )}
            </div>

            <div className='column'>
            <div className='title'>{product.title} </div>
            <div className='description'>{product.description} </div>
            <div className='price'>Цена: {product.price} </div>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <img className='image_modal' src={"http://localhost:8080/get/image/" + modalImg} alt="gg"/>
            </MyModal>
        </div>
    );
};

export default ProductPage;