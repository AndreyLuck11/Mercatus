import {addManyCategoriesAction} from "../Store/categoriesReducer";

export const featchCategories = () => {
    return dispatch => {
        fetch('http://localhost:8080/categories/all')
            .then(response => response.json())
            .then(json => dispatch(addManyCategoriesAction(json)))
    }
}