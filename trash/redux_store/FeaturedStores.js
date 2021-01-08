import { FEATURED_STORE_FAIL, FEATURED_STORE_REQUEST, FEATURED_STORE_SUCCESS } from "./Constants"
import { getData } from "../assets/utils/fetchData";

const baseURL = process.env.BASE_URL

export const listFeaturedStoresAction = (apiURL) => async (dispatch) => {
    dispatch({
        type: FEATURED_STORE_REQUEST
    });
    try {
        const data = await getData(apiURL);
        dispatch({ type: FEATURED_STORE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FEATURED_STORE_FAIL, payload: error.message })
    }
}

export const listFeaturedStoreReducer = (state = { loading: true, featuredStores: [] }, action) => {
    switch (action.type) {
        case FEATURED_STORE_REQUEST:
            return { loading: true, featuredStores: [] }
        case FEATURED_STORE_SUCCESS:
            return { loading: false, featuredStores: action.payload }
        case FEATURED_STORE_FAIL:
            return { loading: false, error: action.payload, featuredStores: [] }
        default:
            return state;
    }
}