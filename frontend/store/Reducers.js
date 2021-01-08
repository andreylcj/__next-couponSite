import ACTION from './Actions'

const reducers = (state, action) => {

    const draftState = Object.assign({}, state)

    switch (action.type) {

        //CATEGORY ========================================================================
        case ACTION.CATEGORY_TITLE_REQUEST:
            return {
                ...draftState,
                categoryReduxStore: {
                    loading: true, categoryRedux: {}
                }
            }
        case ACTION.CATEGORY_TITLE_SUCCESS:
            return {
                ...draftState,
                categoryReduxStore: {
                    loading: false, categoryRedux: action.payload
                }
            }
        case ACTION.CATEGORY_TITLE_FAIL:
            return {
                ...draftState,
                categoryReduxStore: {
                    loading: false, error: action.payload, categoryRedux: {}
                }
            }

        //COUPONS ========================================================================
        case ACTION.COUPONS_REQUEST:
            return {
                ...draftState,
                listCoupons: {
                    loading: true, coupons: []
                }
            }
        case ACTION.COUPONS_SUCCESS:
            return {
                ...draftState,
                listCoupons: {
                    loading: false, coupons: action.payload
                }
            }
        case ACTION.COUPONS_FAIL:
            return {
                ...draftState,
                listCoupons: {
                    loading: false, error: action.payload, coupons: []
                }
            }

        //FEATURED STORES ========================================================================
        case ACTION.FEATURED_STORE_REQUEST:
            return {
                ...draftState,
                listFeaturedStore: {
                    loading: true, featuredStores: []
                }
            }
        case ACTION.FEATURED_STORE_SUCCESS:
            return {
                ...draftState,
                listFeaturedStore: {
                    loading: false, featuredStores: action.payload
                }
            }
        case ACTION.FEATURED_STORE_FAIL:
            return {
                ...draftState,
                listFeaturedStore: {
                    loading: false, error: action.payload, featuredStores: []
                }
            }

        //Top Categories ========================================================================
        case ACTION.TOP_CATEGORIES_REQUEST:
            return {
                ...draftState,
                listTopCategories: {
                    loading: true, topCategories: []
                }
            }
        case ACTION.TOP_CATEGORIES_SUCCESS:
            return {
                ...draftState,
                listTopCategories: {
                    loading: false, topCategories: action.payload
                }
            }
        case ACTION.TOP_CATEGORIES_FAIL:
            return {
                ...draftState,
                listTopCategories: {
                    loading: false, error: action.payload, topCategories: []
                }
            }

        //loading Register And Login ========================================================================
        case ACTION.START_LOADING:
            return {
                ...draftState,
                loadingRegisterAndLoginReduxStore: {
                    loading: true,
                }
            }
        case ACTION.END_LOADING:
            return {
                ...draftState,
                loadingRegisterAndLoginReduxStore: {
                    loading: false,
                }
            }

        //Update user data ========================================================================
        case ACTION.UPDATE_USER_DATA:
            return {
                ...draftState,
                userDataRedux: {
                    userData: {
                        ...draftState.userDataRedux.userData,
                        ...action.payload,
                    }
                }
            }

        default:
            return state
    }
}

export default reducers