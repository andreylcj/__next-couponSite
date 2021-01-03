import React from 'react';
import HeaderLogo from '../snnipets/HeaderLogo';
import HeaderSearch from '../snnipets/HeaderSearch';
import HeaderNav from '../snnipets/HeaderNav';

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <HeaderLogo />
                <HeaderSearch />
                <HeaderNav />               
            </div>
        </header>
    )
}

export default Header
