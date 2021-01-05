import { FEATURED_STORE_FAIL, FEATURED_STORE_REQUEST, FEATURED_STORE_SUCCESS } from "../constants/FeaturedStoresConstants"
import Axios from 'axios'

export const listFeaturedStoresAction = () => async (dispatch) => {
    dispatch({
        type: FEATURED_STORE_REQUEST
    });
    try {
        const { data } = await Axios.get('http://localhost:5000/api/stores/index-featured-estores');
        dispatch({ type: FEATURED_STORE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FEATURED_STORE_FAIL, payload: error.message })
    }
}