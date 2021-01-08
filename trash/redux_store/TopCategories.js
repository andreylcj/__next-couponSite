import { getData } from '../assets/utils/fetchData';
import { TOP_CATEGORIES_FAIL, TOP_CATEGORIES_REQUEST, TOP_CATEGORIES_SUCCESS } from './Constants';

const baseURL = process.env.BASE_URL

export const listTopCategoriesAction = (apiURL) => async (dispatch) => {
    dispatch({
        type: TOP_CATEGORIES_REQUEST
    });
    try {
        const data = await getData(apiURL);
        dispatch({ type: TOP_CATEGORIES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: TOP_CATEGORIES_FAIL, payload: error.message })
    }
}

export const listTopCategoriesReducer = (state = { loading: true, topCategories: [] }, action) => {
    switch (action.type) {
        case TOP_CATEGORIES_REQUEST:
            return { loading: true, topCategories: [] }
        case TOP_CATEGORIES_SUCCESS:
            return { loading: false, topCategories: action.payload }
        case TOP_CATEGORIES_FAIL:
            return { loading: false, error: action.payload, topCategories: [] }
        default:
            return state;
    }
}