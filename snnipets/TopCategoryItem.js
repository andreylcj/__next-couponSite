import React from 'react';
import Link from 'next/link';

function TopCategoryItem(props) {
    const category = props.category;
    return (
        <li key={category._id}>
            <Link href={`/categorias/${category.hiffen_name}`}>
                <a
                    className={category.hiffen_name}
                    data-event="All-Categories"
                    data-action="Top-Categories"
                    data-label={category.name}
                >
                    <i 
                        className={category.icon}
                    ></i>
                    {category.name}
                </a>
            </Link>
        </li>
    )
}

export default TopCategoryItem
