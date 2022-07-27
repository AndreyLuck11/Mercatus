const defaultState = {
    categories: []
}

const ADD_MANY_CATEGORIES = "ADD_CATEGORIES";

export const categoriesReducer = (state =defaultState, action) => {
    switch (action.type){
        case ADD_MANY_CATEGORIES:
            return {...state, categories: [...state.categories, ...action.payload]}
        default:
            return state
    }
}

export const addManyCategoriesAction = (payload) => ({type:ADD_MANY_CATEGORIES, payload});