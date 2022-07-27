import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import ProductsFromCategory from '../pages/ProductsFromCategory';
import ProductPage from '../pages/ProductPage';
import CreateProductPage from '../pages/CreateProductPage';
import Main from "../pages/Main";
import {useSelector} from "react-redux";
import ProductsFromSubcategory from "../pages/ProductsFromSubcategory";
import ProdustsByName from "../pages/ProdustsByName";

const AppRouter = () => {
    const categories = useSelector(state => state.categories.categories);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() =>
        categories.map(function(categories) {
            categories.subcategory.map((subcategory, i) =>
                setSubcategories(prevState =>[...prevState,{title: subcategory.title, id: subcategory.id}]
                ))
        })
    , [categories])


    // const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);


    return (
        <Routes>
		    <Route path="/about" element={<About />} />
            <Route exact path="/" element={<Main />} />
            <Route path="/search" element={<ProdustsByName/>} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage/>} />
            {categories.map(categories =>
                <Route key={categories.id}  path={"/categories/" + categories.id} element={<ProductsFromCategory category={categories.id} title={categories.title} />}/>
            )}

            {subcategories.map(subcategory =>
                <Route key={subcategories.id}  path={"/subcategory/" + subcategory.id} element={<ProductsFromSubcategory subcategory={subcategory.id} title={subcategory.title} />}/>
            )}
            <Route exact path="/create" element={<CreateProductPage />} />
            <Route path="/product/:id" element={<ProductPage/>} />
			<Route path="/*" element={<Navigate replace to="/" />} />
		</Routes>
    );
};

export default AppRouter;