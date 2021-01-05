import Axios from 'axios'
import { COUPONS_FAIL, COUPONS_REQUEST, COUPONS_SUCCESS } from '../constants/CouponsConstants';

export const listCouponsAction = () => async (dispatch) => {
    dispatch({
        type: COUPONS_REQUEST
    });
    try {
        const { data } = await Axios.get('http://localhost:5000/api/coupons/general-featured-coupons');
        dispatch({ type: COUPONS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: COUPONS_FAIL, payload: error.message })
    }
}