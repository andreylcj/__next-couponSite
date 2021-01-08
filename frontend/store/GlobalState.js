import React, { createContext, useReducer } from 'react'
import reducers from './Reducers'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const initialState = {
        listFeaturedStore: {
            loading: true,
            featuredStores: []
        },
        listCoupons: {
            loading: true,
            coupons: []
        },
        listTopCategories: {
            loading: true,
            topCategories: []
        },
        categoryReduxStore: {
            loading: true,
            categoryRedux: {}
        },
        loadingRegisterAndLoginReduxStore: {

        },
        userDataRedux: {
            userData: {
                email: '',
                password: ''
            }
        },
    }
    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>

    )
}