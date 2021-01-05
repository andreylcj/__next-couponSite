import React, { useEffect } from 'react';
import LogoSquare from '../snnipets/LogoSquare'
import ShowContentWithLoadingOrError from '../snnipets/ShowContentWithLoadingOrError';
import { listFeaturedStoresAction } from '../redux_store/actions/featuredStoresActions';
import { useDispatch, useSelector } from 'react-redux'

function FeaturedStores() {
    const dispatch = useDispatch();
    const { listFeaturedStore } = useSelector((state) => state)
    const { loading, error, featuredStores } = listFeaturedStore;
    const stores = featuredStores;
    console.log(useSelector((state) => state))
    useEffect(() => {
        dispatch(listFeaturedStoresAction())
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