import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {useSelector} from "react-redux";

const Select11 = () => {


    const categories = useSelector(state => state.categories.categories);

    const [categoryId, setCategoryId] = useState(0);
    const [subcategoryId, setSubategoryId] = useState(1);

    const [categoryOptions, setCategoryOptions] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    useEffect(() =>
            categories.map(function(categories) {
                setCategoryOptions(prevState =>[...prevState,{value: categories.id, label: categories.title}])
            })
        , [categories]);

    function ggg (){
        if(categories.length > 0 || categoryId !== 0){
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


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    console.log(categoryId);
    console.log(subcategoryOptions)

    return (
        <div>
            <Select options={categoryOptions} onChange={changeCategory}/>
            <Select options={subcategoryOptions} onChange={changeSubcategory} />
        </div>
    );
};

export default Select11;