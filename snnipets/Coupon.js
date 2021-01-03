import React from 'react';
import Link from 'next/link';

function Coupon(props) {
    const coupon = props.coupon;
    return (
        <li 
            key={coupon._id} 
            className="item item-sale"
            id={coupon._id} 
            data-type={coupon.type} 
            data-store-id={coupon.store_id} 
            data-filter-type={coupon.filter_type}  
            data-id={coupon._id}  
        >
            <Link href={`/store/${coupon._id}`}>
                <a
                    className="store-img"
                    title={`Cupons de desconto de ${coupon.store_nicename}`}
                    data-event="General-Featured-Coupon"
                    data-action='Go-to-Store-Page'
                    data-label={coupon.store_nicename}
                >
                    <img
                        src={coupon.img_src}
                        alt={`Ver todos cupons de desconto de ${coupon.store_nicename}`}
                        crossOrigin="anonymous"
                    />
                    <div className="store-logo-text">
                        <div className="store-logo-intro">
                            Ver cupons de
                                </div>
                        <div className="store-logo-name">
                            {coupon.store_nicename}
                        </div>
                    </div>
                </a>
            </Link>
            <div className="coupon-info js-coupon-info isSwitchable">
                <div className="item-title">
                    <Link href={coupon.url}>
                        <a
                            className="item-title"
                            data-event="General-Featured-Coupon"
                            data-action="Get-Coupon-Title"
                            data-label={coupon.store_nicename}
                        >
                            {coupon.title}
                        </a>
                    </Link>
                    <span className="flag-coupon-cashback">
                        + {coupon.cashback}% de cashback
                            </span>
                </div>
                <div className="coupon-description">
                    <div className="item-desc-wrapper toggle-text">
                        <div className="item-desc">
                            {coupon.description}
                        </div>
                    </div>
                </div>
            </div>

            {(coupon.type === 'sale') ?
                (<div className="item-promo item-sale"> 
                    <Link href={coupon.url}>
                        <a 
                            className="item-promo-block item-promo-link item-sale-link" 
                            title="Clique para abrir ver o desconto no site"
                            data-event="General-Featured-Coupon" 
                            data-action="Get-Sale"
                            data-label={coupon.store_nicename}
                        >
                            Ver Desconto
                        </a>
                    </Link>
                </div>)
                :
                (<div className="item-promo item-code">
                    <Link href={coupon.url}>
                        <a
                            className="item-promo-block"
                            href={coupon.url}
                            title="Clique para pegar o cupom"
                            data-event="General-Featured-Coupon"
                            data-action="Get-Coupon-Code"
                            data-label={coupon.store_nicename}
                        >
                            <span className="item-promo-link item-cover">
                                <span className="item-promo-link-inside">
                                    Ver Cupom
                                </span>
                            </span>
                            <span className="item-code-link">
                                {coupon.code}
                            </span>
                        </a>
                    </Link>
                </div>)
            }            
        </li >
    )
}

export default Coupon

