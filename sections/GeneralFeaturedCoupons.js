import React from 'react';
import Coupon from '../snnipets/Coupon';
import GetEmail from '../snnipets/GetEmail';

function GeneralFeaturedCoupons(props) {
    const coupons = props.generalFeaturedCoupons;
    return (
        <section id="middle" className="middle">
            <div className="container">
                <h2 className="title" id="top25"> Os 25 melhores Cupons de Desconto da semana!</h2>
            </div>
            <div className="container">
                <div className="main-content ">
                    <div className="content-block coupons-content">
                        <ul className="coupon-list valid-coupons">
                            {coupons.map((coupon, index) => (
                                <Coupon key={coupon._id} coupon={coupon} />                   
                            ))}
                        </ul>
                    </div>
                    <GetEmail />
                </div>
            </div>
        </section>
    )
}

export default GeneralFeaturedCoupons
