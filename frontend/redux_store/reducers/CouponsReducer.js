import { COUPONS_FAIL, COUPONS_REQUEST, COUPONS_SUCCESS } from "../constants/CouponsConstants";


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