import React, { useEffect } from 'react';
import ValidCouponItem from '../snnipets/ValidCouponItem';
import GetEmail from '../snnipets/GetEmail';
import ShowContentWithLoadingOrError from '../snnipets/ShowContentWithLoadingOrError'
import { useDispatch, useSelector } from 'react-redux'
import { listCouponsAction } from '../redux_store/actions/couponsActions';

function GeneralFeaturedCoupons() {

    const dispatch = useDispatch();
    const { listCoupons } = useSelector((state) => state)
    const { loading, error, coupons } = listCoupons;
    useEffect(() => {
        dispatch(listCouponsAction())
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
