import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { listFeaturedStoreReducer } from "./FeaturedStores";
import { listCouponsReducer } from './Coupons'
import { listTopCategoriesReducer } from './TopCategories';
import { categoryReducer } from './Category';
import { loadingRegisterAndLoginReducer } from './LoadingRegisterAndLogin';
import { userDataReducer } from './UserData';


const initialState = {};
const reducer = combineReducers({
    listFeaturedStore: listFeaturedStoreReducer,
    listCoupons: listCouponsReducer,
    listTopCategories: listTopCategoriesReducer,
    categoryReduxStore: categoryReducer,
    loadingRegisterAndLoginReduxStore: loadingRegisterAndLoginReducer,
    userDataRedux: userDataReducer,
})

const defineComposeEnhancer = () => {
    if (typeof window !== 'undefined') {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
        return compose
    }
}
const composeEnhancer = defineComposeEnhancer();
const Store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default Store;