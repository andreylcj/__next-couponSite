import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { listFeaturedStoreReducer } from "./reducers/FeaturedStoresReducers";
import { listCouponsReducer } from './reducers/CouponsReducer'

const initialState = {};
const reducer = combineReducers({
    listFeaturedStore: listFeaturedStoreReducer,
    listCoupons: listCouponsReducer,
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