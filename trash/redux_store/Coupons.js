import { getData } from '../assets/utils/fetchData';
import { COUPONS_FAIL, COUPONS_REQUEST, COUPONS_SUCCESS } from './Constants';

const baseURL = process.env.BASE_URL

export const listCouponsAction = (apiURL) => async (dispatch) => {
    dispatch({
        type: COUPONS_REQUEST
    });
    try {
        const data = await getData(apiURL);
        dispatch({ type: COUPONS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: COUPONS_FAIL, payload: error.message })
    }
}

export const listCouponsReducer = (state = { loading: true, coupons: [] }, action) => {
    switch (action.type) {
        case COUPONS_REQUEST:
            return { loading: true, coupons: [] }
        case COUPONS_SUCCESS:
            return { loading: false, coupons: action.payload }
        case COUPONS_FAIL:
            return { loading: false, error: action.payload, coupons: [] }
        default:
            return state;
    }
}