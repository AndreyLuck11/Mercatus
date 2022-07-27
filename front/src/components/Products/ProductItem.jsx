import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const ProductItem = (props) => {
    const router = useNavigate();
    return (
        <div>
        
            <div className='product'>
                <div className="product__item">
                    <img className="product__image" src={'http://localhost:8080/get/image/' + props.image} alt="gg"/>
                    <div className="product__title">{props.product.title} </div>
                    <div className="product__price">Цена: {props.product.price} </div>
                    <MyButton onClick={() => router(`/product/${props.product.id}`)} >Открыть</MyButton>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;