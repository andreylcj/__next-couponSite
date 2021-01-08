import { getData } from '../assets/utils/fetchData';
import { CATEGORY_TITLE_FAIL, CATEGORY_TITLE_REQUEST, CATEGORY_TITLE_SUCCESS } from './Constants';


const baseURL = process.env.BASE_URL

export const categoryAction = (category_hiffen_name) => async (dispatch) => {
    dispatch({
        type: CATEGORY_TITLE_REQUEST, payload: category_hiffen_name
    });
    try {
        const data = await getData(category_hiffen_name);
        dispatch({ type: CATEGORY_TITLE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CATEGORY_TITLE_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : error.message
        })
    }
}

export const categoryReducer = (state = { loading: true, categoryRedux: {} }, action) => {
    switch (action.type) {
        case CATEGORY_TITLE_REQUEST:
            return { loading: true, categoryRedux: {} }
        case CATEGORY_TITLE_SUCCESS:
            return { loading: false, categoryRedux: action.payload }
        case CATEGORY_TITLE_FAIL:
            return { loading: false, error: action.payload, categoryRedux: {} }
        default:
            return state;
    }
}