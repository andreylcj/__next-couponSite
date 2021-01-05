import React from 'react'
import FeaturedStores from './FeaturedStores'

function CategoryRelatedStores(props) {
    const category = props.category;
    return (
        <section id="featured" className="featured-stores">
            <div className="container">
                <h1 className='title'>
                    {category.title}
                </h1>
                <hr className="subTitle-hr" />
                <FeaturedStores featuredStores={category.related_stores} />
            </div>
        </section>
    )
}

export default CategoryRelatedStores
