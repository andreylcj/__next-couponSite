import { FEATURED_STORE_FAIL, FEATURED_STORE_REQUEST, FEATURED_STORE_SUCCESS } from "../constants/FeaturedStoresConstants";


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