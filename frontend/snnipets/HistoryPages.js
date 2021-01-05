import Link from 'next/link'
import React from 'react'

function HistoryPages() {
    return (
        <div className="breadcrumb">
            <span>
                <Link href="/">
                    <a title="Ver todos os cupons de desconto em destaque">
                        <span>Início</span>
                    </a>
                </Link>
            </span>
            <span className="breadcrumb-list-element">
                <Link href="https://www.cuponomia.com.br/cupom/alimentos-e-bebidas">
                    <a>
                        <span>Alimentos e Bebidas</span>
                    </a>
                </Link>
            </span>
        </div>
    )
}

export default HistoryPages
