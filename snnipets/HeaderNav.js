import React from 'react'
import Link from 'next/link'

function HeaderNav() {
    return (
        <nav className="header-nav js-nav-top">
            <a href="#menu" className="nav-item nav-mobile js-nav-mobile">MOBILE</a>
            <ul id="menu" className="nav-menu js-nav-menu">
                <li className="nav-item-title nav-stores nav-mobile-item js-nav-mobile-item">
                    <Link href="/lojas">
                        <a
                            title="Cupons de descontos e códigos promocionais organizados por Lojas"
                            data-event="Navigation"
                            data-action="Nav-All-Stores"
                        >
                            Lojas
                        </a>
                    </Link>
                </li>
                <li className="nav-item-title nav-categories nav-mobile-item js-nav-mobile-item">
                    <Link href="/categorias">
                        <a
                            title="Cupons de descontos e códigos promocionais organizados por Categorias"
                            data-event="Navigation"
                            data-action="Nav-All-Categories"
                        >
                            Categorias
                        </a>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default HeaderNav
