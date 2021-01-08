import React, { useEffect, useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import ACTION from '../store/Actions'
import LogoSquare from '../snnipets/LogoSquare'
import ShowContentWithLoadingOrError from '../snnipets/ShowContentWithLoadingOrError';
import { getData } from '../assets/utils/fetchData';

function FeaturedStores(props) {

    const [state, dispatch] = useContext(DataContext);
    const { listFeaturedStore } = state
    const { loading, error, featuredStores } = listFeaturedStore;
    const stores = featuredStores;
    useEffect(async () => {

        dispatch({
            type: ACTION.FEATURED_STORE_REQUEST
        });
        try {
            const res = await getData(props.apiURL);
            dispatch({ type: ACTION.FEATURED_STORE_SUCCESS, payload: res })
        } catch (error) {
            dispatch({ type: ACTION.FEATURED_STORE_FAIL, payload: error.message })
        }
    }, [dispatch]);
    return (
        <div className="featured-header-container">
            {/* APPEAR ONLY ON CELL
            <button className="featuredHeader-step js-stepIcon" aria-hidden="true">
                    <svg className="u-arrow-icon" viewBox="0 0 54 54">
                        <use crossOrigin="anonymous" xlink:href="/icons/icons.svg#arrow-icon"></use>
                </svg> 
            </button> 
            */}
            <ul className="list">
                <ShowContentWithLoadingOrError loading={loading} error={error}>
                    {stores.map((store) => (
                        <LogoSquare key={store._id} store={store} />
                    ))}
                </ShowContentWithLoadingOrError>
            </ul>
            <div className="featured-header-indicator"></div>
        </div>
    )
}

export default FeaturedStores