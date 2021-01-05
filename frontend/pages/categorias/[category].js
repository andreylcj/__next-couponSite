import React from 'react'
import CategoryRelatedStores from '../../sections/CategoryRelatedStores'
import categoryData from '../../simulate_data/category'
import ValidCoupons from '../../sections/ValidCoupons'
import HistoryPages from '../../snnipets/HistoryPages'
import ExpiredCoupons from '../../sections/ExpiredCoupons'

function CategoryPage(props) {
    const category = props.category;
    return (
        <>
            <CategoryRelatedStores category={category} />

            <section id="middle" className="middle category-page">
                <div className="container">
                    <h2 className="title" id="top25">Cupons de Desconto</h2>
                    <hr className='subTitle-hr' />
                </div>
                <div className="container">
                    <ValidCoupons validCoupons={category.valid_coupons} />
                    <ExpiredCoupons
                        expiredCoupons={category.expired_coupons}
                        categoryTitle={category.title}
                    />
                </div>
                <HistoryPages />
            </section>
        </>
    )
}

export default CategoryPage

export async function getServerSideProps({ params: { category } }) {

    //const res = await getData(`categorias/${category}`);
    const res = categoryData;

    return {
        props: { category: res.category }, // will be passed to the page component as props
    }
}
