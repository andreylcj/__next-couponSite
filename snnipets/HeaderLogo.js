import React from 'react'
import Link from 'next/link'

function HeaderLogo() {

    const Logo = '/images/logos/minor_logo.png';

    return (
        <div className="header-logo">
            <Link href="/">
                <a className="logo" title="Ir para a página inicial" >
                    <img src={Logo} alt="Morant - Cupons de Desconto Online Grátis" crossOrigin="anonymous" />
                </a>
            </Link>
        </div>
    )
}

export default HeaderLogo
