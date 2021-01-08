import React, { useEffect, useContext } from 'react'
import CategoryRelatedStores from '../../sections/CategoryRelatedStores'
import ValidCoupons from '../../sections/ValidCoupons'
import HistoryPages from '../../snnipets/HistoryPages'
import ExpiredCoupons from '../../sections/ExpiredCoupons'
import ACTION from '../../store/Actions'
import { getData } from '../../assets/utils/fetchData'
import { DataContext } from '../../store/GlobalState'

function CategoryPage(props) {
    const category_hiffen_name = props.category_hiffen_name;
    const [state, dispatch] = useContext(DataContext);
    const { categoryReduxStore } = state
    const { categoryRedux } = categoryReduxStore;
    const category = categoryRedux;
    useEffect(async () => {

        dispatch({
            type: ACTION.CATEGORY_TITLE_REQUEST, payload: category_hiffen_name
        });
        try {
            const data = await getData(`/api/categorias/${category_hiffen_name}`);
            dispatch({ type: ACTION.CATEGORY_TITLE_SUCCESS, payload: data })
        } catch (error) {
            dispatch({
                type: ACTION.CATEGORY_TITLE_FAIL,
                payload:
                    error.response && error.response.data.message ?
                        error.response.data.message : error.message
            })
        }

    }, [dispatch]);
    return (
        <>
            <CategoryRelatedStores />

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

    return {
        props: { category_hiffen_name: category }, // will be passed to the page component as props
    }
}
