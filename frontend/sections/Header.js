import React from 'react';
import HeaderLogo from '../snnipets/HeaderLogo';
import HeaderSearch from '../snnipets/HeaderSearch';
import HeaderNav from '../snnipets/HeaderNav';
import Link from 'next/link';

const Header = (props) => {
    return (
        <header>

            <div className="container">
                <HeaderLogo />
                <HeaderSearch />
                <HeaderNav />
                <Link href="/entrar"><a>Entrar</a></Link>
                <Link href="/registrar"><a>Registrar</a></Link>

            </div>
        </header>
    )
}

export default Header
