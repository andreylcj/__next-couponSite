import React, { useContext } from 'react'
import FeaturedStores from './FeaturedStores'
import { DataContext } from '../store/GlobalState';

function CategoryRelatedStores() {
    const [state, dispatch] = useContext(DataContext);
    const { categoryReduxStore } = state
    const { categoryRedux } = categoryReduxStore;
    const category_title = categoryRedux.title;
    const hiffen_title = categoryRedux.hiffen_title;
    return (
        <section id="featured" className="featured-stores">
            <div className="container">
                <h1 className='title'>
                    {category_title}
                </h1>
                <hr className="subTitle-hr" />
                <FeaturedStores apiURL={`/api/categorias/${hiffen_title}/lojas-relacionadas`} />
            </div>
        </section>
    )
}

export default CategoryRelatedStores
