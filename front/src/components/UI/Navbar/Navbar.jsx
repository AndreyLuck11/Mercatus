import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {featchCategories} from "../../../API/CategoriesServise";
import MyButton from "../button/MyButton";
import MyModal from "../MyModal/MyModal";
import MyInput from "../input/MyInput";


const Navbar = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    const[modal, setModal] = useState(false)
    useEffect(() =>
            dispatch(featchCategories())
    , [])
    return (
        <div className="navbar">
        <Link className='navbar__logo' to="/">Mercatus</Link>
        <div className="navbar__links">
            {categories.map(categories =>
                <div key={categories.id} className='navbar__link-container'>
                     <Link  className='navbar__link' to={"/categories/" + categories.id}>
                        {categories.title}
                    </Link>

                    <ul className='submenu'>
                        {categories.subcategory.map((subcategory, i) =>
                            <li key={subcategory.id}>
                                <Link  className='navbar__link-pod' to={"/subcategory/" + subcategory.id}>
                                    {subcategory.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
            <Link className='navbar__link' to="/about">О сайте</Link>
            <Link className='navbar__link' to="/posts">Новости</Link>
        </div>
        {/*<MyButton onClick={() => setModal(true)}>ПОИСК</MyButton>*/}
            <Link className='navbar__link' to="/search">Поиск</Link>
            <Link className='navbar__link' to="/create">Создать объявление</Link>
        <Link className='navbar__link' to="/create">Войти</Link>

            {/*<MyModal visible={modal} setVisible={setModal}>*/}
            {/*   <Find/>*/}
            {/*</MyModal>*/}
    </div>
    );
};

export default Navbar;