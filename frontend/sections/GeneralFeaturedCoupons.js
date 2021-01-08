import React, { useEffect, useContext } from 'react';
import ValidCouponItem from '../snnipets/ValidCouponItem';
import GetEmail from '../snnipets/GetEmail';
import ShowContentWithLoadingOrError from '../snnipets/ShowContentWithLoadingOrError'
import { getData } from '../assets/utils/fetchData';
import ACTION from '../store/Actions';
import { DataContext } from '../store/GlobalState';

function GeneralFeaturedCoupons(props) {

    const [state, dispatch] = useContext(DataContext);
    const { listCoupons } = state
    const { loading, error, coupons } = listCoupons;
    useEffect(async () => {

        dispatch({
            type: ACTION.COUPONS_REQUEST
        });
        try {
            const data = await getData(props.apiURL);
            dispatch({ type: ACTION.COUPONS_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: ACTION.COUPONS_FAIL, payload: error.message })
        }

    }, [dispatch]);

    return (
        <section id="middle" className="middle">
            <div className="container">
                <h2 className="title" id="top25"> Os 25 melhores Cupons de Desconto da semana!</h2>
            </div>
            <div className="container">
                <div className="main-content ">
                    <div className="content-block coupons-content">
                        <ul className="coupon-list valid-coupons">
                            <ShowContentWithLoadingOrError loading={loading} error={error}>
                                {coupons.map((coupon, index) => (
                                    <ValidCouponItem key={coupon._id} coupon={coupon} />
                                ))}
                            </ShowContentWithLoadingOrError>
                        </ul>
                    </div>
                    <GetEmail />
                </div>
            </div>
        </section>
    )
}

export default GeneralFeaturedCoupons
