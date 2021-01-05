import React from 'react'
import ChromeButton from './ChromeButton'

function ChromeExtension() {

    return (
        <li key='ChromeExtension' className="js-get-container get-container item chrome-extension">
            <div style={{ display: 'none' }}>
                <div className="signupCashback">
                    <div className="signupCashback-content">
                        <div className="signupCashback-img"></div>
                        <h2 className="signupCashback-title">
                            Ganhe <strong>cashback</strong>
                            <br />
                            <span>em suas compras de Alimentos e Bebidas.</span>
                        </h2>
                    </div>
                    <button
                        data-url="coupon-list"
                        type="submit"
                        className="signupCashback-button"
                        data-event="Coupon-List-Activate"
                        data-action="Reveal-Signup"
                        name="email-submit-cashback"
                    >
                        Cadastre-se e ganhe
                    </button>
                </div>
            </div>
            <div className="extension-item js-extension-banner">
                <img
                    className="js-extension-illustration"
                    data-src="https://cuponomia-a.akamaihd.net/img/extension/slide-extension-1.png?v4"
                    width="186"
                    height="90"
                    alt="Extensão do Cuponomia, mostrando cupons de desconto no carrinho de uma loja"
                    crossOrigin="anonymous"
                    src="/images/chrome_extension/screen_computer_extension.png"
                />
                <div className="extensionItem-container">
                    <div className="extensionItem-text">
                        <span className="extensionItem-title">
                            Veja os cupons direto nas lojas
                            </span>
                        <span className="extensionItem-subtitle">
                            Nunca mais esqueça de economizar!
                            </span>
                    </div>
                    <ChromeButton />
                </div>
            </div>
        </li>
    )
}

export default ChromeExtension
