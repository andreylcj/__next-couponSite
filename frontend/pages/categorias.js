import React from 'react'
import TopCategories from '../sections/TopCategories'

function Categories() {
    return (
        <>
            <TopCategories apiURL='/api/categorias/top-categorias' />
        </>
    )
}

export default Categories
