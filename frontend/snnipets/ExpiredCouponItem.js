import Link from 'next/link';
import React from 'react'

function ExpiredCouponItem(props) {
    const coupon = props.expired_coupon;
    return (
        <li key={coupon._id}
            className="item scroll-item js-scroll-item item-code expired-item">
            <Link href="store_page?store=1">
                <a
                    className="store-img"
                    title={`Cupons de desconto de ${coupon.store_nicename}`}
                    data-event="Category-Coupon"
                    data-action="Go-Store-Page"
                    data-label={coupon.store_nicename}
                >
                    <img
                        src={coupon.img_src}
                        alt={`Ver todos cupons de desconto de ${coupon.store_nicename}`}
                        crossOrigin="anonymous"
                    />
                </a>
            </Link>
            <div className="coupon-info js-coupon-info isSwitchable">
                <div className="item-title">
                    <Link href={coupon.url}>
                        <a
                            className="js-itemTitle"
                            data-event="Category-Coupon"
                            data-action="Go-to-Oficial-Store-From-Title"
                            data-label={coupon.store_nicename}
                        >
                            Compre chocolate com desconto de R$50
                    </a>
                    </Link>
                    <span className="coupon-code">
                        <span className="code">{coupon.code}</span>
                    </span>
                </div>
                <div className="coupon-info-complement"></div>
            </div>
        </li>
    )
}

export default ExpiredCouponItem
