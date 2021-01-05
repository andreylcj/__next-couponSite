import React from 'react'
import ChromeExtension from '../snnipets/ChromeExtension';
import ValidCouponItem from '../snnipets/ValidCouponItem';

function ValidCoupons(props) {
    const valid_coupons = props.validCoupons;
    return (
        <div className="main-content ">
            <div className="content-block coupons-content">
                <ul className="coupon-list valid-coupons">
                    {valid_coupons.map((coupon, index) => (
                        (index == 1) ? (
                            <>
                                <ValidCouponItem key={coupon._id} coupon={coupon} />
                                <ChromeExtension key='ChromeExtension' />
                            </>
                        ) : (
                                <ValidCouponItem key={coupon._id} coupon={coupon} />
                            )
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ValidCoupons
