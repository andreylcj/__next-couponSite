import React from 'react'
import ExpiredCouponItem from '../snnipets/ExpiredCouponItem';

function ExpiredCoupons(props) {
    const expiredCoupons = props.expiredCoupons || [];
    const { categoryTitle } = props;

    return (
        <>
            <div className="main-content expired-coupons">
                <span className="expired-header expired-title scroll-item">
                    Cupons expirados de {categoryTitle}
                    <span className="header-subtitle">Talvez ainda funcionem</span>
                </span>
                <div className="content-block coupons-content expired-content">
                    <ul className="coupon-list expired-coupons">
                        {expiredCoupons.map((coupon) => (
                            <ExpiredCouponItem expired_coupon={coupon} key={coupon._id} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ExpiredCoupons
