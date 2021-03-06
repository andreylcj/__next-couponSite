import React from 'react'

function HeaderSearch() {
    return (
        <div className="js-searchTop search-header">
            <form method="get" id="search-form" className="search-form js-searchForm" action="/busca">
                <input type="search"
                    className="search-field js-searchField" placeholder="Busque pelo nome da loja..." name="query"
                    id="query" autoComplete="off" />
                <label htmlFor="query" className="js-searchMobile search-label">

                </label>
                <button type="button" className="js-searchSubmit search-submit-button" id="search-submit"
                    aria-label="Procurar" value="Procurar">
                </button>
            </form>
            <div className="search-help js-searchHelp"> <span className="search-suggestion">Algumas sugestões para você:</span>
                <ul className="search-list">
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL2Nhc2FzLWJhaGlh" data-event="Search" data-action="Search-Link"
                        data-label="Casas Bahia"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/casas-bahia-637312002921264031.png?v4"
                            alt="Casas Bahia" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL25hdHVyYQ==" data-event="Search" data-action="Search-Link"
                        data-label="Natura"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/natura-637357799251141547.png?v4"
                            alt="Natura" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2N1cG9tLWRlc2NvbnRvLWFtZXJpY2FuYXM=" data-event="Search"
                        data-action="Search-Link" data-label="Americanas"> <img className="js-search-helper-img"
                            width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/americanas-637195380182765939.png?v4"
                            alt="Americanas" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link" data-url="L2Rlc2NvbnRvL2thYnVt"
                        data-event="Search" data-action="Search-Link" data-label="KaBuM!"> <img
                            className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/kabum.png?v4" alt="KaBuM!"
                            crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL25ldHNob2Vz" data-event="Search" data-action="Search-Link"
                        data-label="Netshoes"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/netshoes-636994896489500000.png?v4"
                            alt="Netshoes" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL3BvbnRvZnJpbw==" data-event="Search" data-action="Search-Link"
                        data-label="Pontofrio"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/ponto-frio-636994896657294000.png?v4"
                            alt="Pontofrio" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL2FtYXpvbg==" data-event="Search" data-action="Search-Link"
                        data-label="Amazon"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/amazon-636994893639686000.png?v4"
                            alt="Amazon" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link" data-url="L2Rlc2NvbnRvL2V4dHJh"
                        data-event="Search" data-action="Search-Link" data-label="Extra"> <img
                            className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/extra-637085533885174149.png?v4"
                            alt="Extra" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL2Jvb2tpbmctY29t" data-event="Search" data-action="Search-Link"
                        data-label="Booking.com"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/bookingcom.png?v4"
                            alt="Booking.com" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL3Nob3BlZQ==" data-event="Search" data-action="Search-Link"
                        data-label="Shopee"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/shopee-637268866674503035.png?v4"
                            alt="Shopee" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link" data-url="L2Rlc2NvbnRvL2NlYQ=="
                        data-event="Search" data-action="Search-Link" data-label="C&amp;A"> <img
                            className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/cea-636994894360408000.png?v4"
                            alt="C&amp;A" crossOrigin="anonymous" /> </button></li>
                    <li className="help-items"> <button type="button" className="js-help-link"
                        data-url="L2Rlc2NvbnRvL2FkaWRhcw==" data-event="Search" data-action="Search-Link"
                        data-label="adidas"> <img className="js-search-helper-img" width="110" height="88" src=""
                            data-src="https://cuponomia-a.akamaihd.net/img/stores/small/adidas-637227224315440043.png?v4"
                            alt="adidas" crossOrigin="anonymous" /> </button></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderSearch
