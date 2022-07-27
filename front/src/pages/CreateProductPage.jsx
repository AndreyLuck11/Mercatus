import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import classes from '../components/UI/input/MyInput.module.css'
import React, {useEffect, useRef, useState, Component, useLayoutEffect} from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import Select from "react-select";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";

const CreateProductPage = () => {
    const [product, setProduct] = useState({title:'', description:'',price:''})
    const [img, setImg] = useState([]);
    const categories = useSelector(state => state.categories.categories);
    const[modal, setModal] = useState(false)
    const[modalMassage, setModalMassage] = useState('')

    const [categoryId, setCategoryId] = useState(0);
    const [subcategoryId, setSubategoryId] = useState(1);

    const [categoryOptions, setCategoryOptions] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    useEffect(() =>
            categories.map(function(categories) {
                setCategoryOptions( prevState =>[...prevState,{value: categories.id, label: categories.title},])

            })
        , [categories]);

    function ggg (){
        if(categories.length > 0 && categoryId !== 0){
                setSubcategoryOptions([]);
                categories[categoryId - 1].subcategory.map((subcategory) => setSubcategoryOptions(prevState =>[...prevState,{value: subcategory.id, label: subcategory.title}]));
        }
    }


        useEffect(() =>
                ggg()
            , [categoryId])


    const changeCategory = (newValue:any) => {
        setCategoryId(newValue.value);
    }

    const changeSubcategory = (newValue:any) => {
        setSubategoryId(newValue.value);
    }


     async function addNewProduct(e){
        e.preventDefault();
                axios({
                    method: 'post',
                    url: 'http://localhost:8080/product',
                    data: {
                        title: product.title,
                        description: product.description,
                        price: product.price

                    },
                    params:{
                        categoryId: categoryId,
                        subcategoryId:subcategoryId,
                        username: 'admin'
                    }
                })
          .then(function (response) {

            img.map( function (img) {
                const data = new FormData();
                data.append('image', img)
                try{

                    axios.post("http://localhost:8080/upload/image", data,{
                        params:{
                            productId: response.data.id
                        }

                    })
                } catch(e){
                    console.log(e);
                    setModal(true)
                    setModalMassage('Что-то пошло не так')
                }
            })
          })
                .then(function (){
                    setModal(true)
                    setModalMassage('Обьявление создано')
                })
                .finally(function (){
                        setImg([]);
                        setProduct({title:'', description:'',price:''});
                })



      }


      // console.log(img);
    return (
        <form>
        <MyInput
            value = {product.title}
            onChange={e => setProduct({...product, title: e.target.value})}
            type="text"
            placeholder='Название обьявления'
         />
        <MyInput
            value = {product.description}
            onChange={e => setProduct({...product, description: e.target.value})}
            type="text"
            placeholder='Описание обьявления'
        />
        <MyInput
            value = {product.price}
            onChange={e => setProduct({...product, price: e.target.value})}
            type="number"
            placeholder='Цена'
        />
            <div>Выберите категорию:</div>
        <Select className={'react-select-container'} options={categoryOptions} onChange={changeCategory}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                    },
                })}
        />
            <div>Выберите подкатегорию:</div>
        <Select className={'react-select-container'} options={subcategoryOptions} onChange={changeSubcategory}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                    },
                })}
        />
            <div className="input__wrapper_fils">
        <input type="file" onChange={e => setImg(prevState => [...prevState, e.target.files[0]])} />
        <input type="file" onChange={e => setImg(prevState => [...prevState, e.target.files[0]])}/>
        <input type="file" onChange={e => setImg(prevState => [...prevState, e.target.files[0]])}/>
            </div>
        <MyButton onClick={addNewProduct}>Создать объявление</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                {modalMassage}
            </MyModal>
      </form>
    )
};

export default CreateProductPage;