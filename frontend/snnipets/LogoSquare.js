import React from 'react'
import Link from 'next/link';

function LogoSquare(props) {
    const store = props.store;
    return (
        <li key={store._id} className="featured-item">
            <Link href={`/store/${store._id}`}>
                <a
                    title={`Cupons de desconto de ${store.nicename}`}
                    className="featured-item-block"
                    data-event="Featured-Stores"
                    data-action="Go-to-Store-Page"
                    data-label={store.nicename}
                >
                    <picture className="featured-item-logo">
                        {
                            store.images.map((image, subIndex) => (
                                image.max_width ?
                                    (<source
                                        key={subIndex}
                                        width={image.width}
                                        height={image.height}
                                        media={`(max-width: ${image.max_width}px)`}
                                        srcSet={image.srcset}
                                    />)
                                    :
                                    (<source
                                        key={subIndex}
                                        width={image.width}
                                        height={image.height}
                                        srcSet={image.srcset}
                                    />)
                            ))
                        }
                        <img
                            width={store.images[store.images.length - 1].width}
                            height={store.images[store.images.length - 1].height}
                            crossOrigin="anonymous"
                            src={store.images[store.images.length - 1].srcset}
                            alt={`Logo da loja ${store.nicename}`}
                        />
                    </picture>
                    <div className="featured-item-info">
                        <span className="featured-item-coupons">{`${store.coupons} cupons +`}</span>
                        <span className="featured-item-cashback">{`${store.coupons} % de cashback`}</span>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default LogoSquare
