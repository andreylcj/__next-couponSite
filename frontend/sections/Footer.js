import React from 'react'
import Link from 'next/link';

function Footer() {
    return (
        <footer id="footer" >
            <div className="container">
                <nav className="footer-nav">
                    <div className="footer-column">
                        <h6 className="u-bold">Sobre o Morant</h6>
                        <ul className="footer-list">
                            <li className="u-small">
                                <Link href="/sobre"><a title="Nossa Empresa" >Nossa Empresa</a></Link>
                            </li>
                            <li className="u-small">
                                <Link href="/time"><a title="Nosso Time">Nosso Time</a></Link>
                            </li>
                            <li className="u-small">
                                <Link href="/trabalhe-conosco"><a title="Trabalhe Conosco">Trabalhe Conosco</a></Link>
                            </li>
                            <li className="u-small">
                                <Link href="/imprensa"><a title="Imprensa">Imprensa</a></Link>
                            </li>
                            <li className="u-small">
                                <Link href="/pesquisas"><a title="Pesquisas">Pesquisas</a></Link>
                            </li>
                            <li className="u-small">
                                <Link href="/https://chrome.google.com/webstore/detail/gidejehfgombmkfflghejpncblgfkagj">
                                    <a title="Extensão">Extensão</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h6 className="u-bold">Suporte</h6>
                        <ul className="footer-list">
                            <li className="u-small">
                                <Link href="/perguntas-frequentes"><a title="Perguntas Frequentes" >Perguntas
                            Frequentes</a></Link>
                            </li>
                            <li className="u-small">
                                <Link href="/contato"><a title="Fale Conosco" >Fale Conosco</a></Link>
                            </li>
                            <li className="u-small">
                                <Link href="/publicar-cupom"><a title="Publicar um cupom" >Publicar um Cupom</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h6 className="u-bold">Datas especiais</h6>
                        <ul className="footer-list">
                            <li className="u-small">
                                <Link href="/ofertas/dia-das-maes">
                                    <a title="Veja ofertas especiais de descontos e códigos promocionais para o Dia das Mães">
                                        Dia das Mães
                                    </a>
                                </Link>
                            </li>
                            <li className="u-small">
                                <Link href="/ofertas/dia-dos-pais">
                                    <a
                                        title="Veja ofertas especiais de descontos e códigos promocionais para o Dia dos Pais"
                                    >Dia dos Pais</a>
                                </Link>
                            </li>
                            <li className="u-small">
                                <Link href="/ofertas/black-friday">
                                    <a
                                        title="Veja ofertas especiais de descontos e códigos promocionais para o Black Friday"
                                    >Black Friday</a>
                                </Link>
                            </li>
                            <li className="u-small">
                                <Link href="/ofertas/cyber-monday">
                                    <a
                                        title="Veja ofertas especiais de descontos e códigos promocionais para o Cyber Monday"
                                    >Cyber Monday</a>
                                </Link>
                            </li>
                            <li className="u-small">
                                <Link href="/ofertas/natal">
                                    <a
                                        title="Veja ofertas especiais de descontos e códigos promocionais para o Natal"
                                    >Natal</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column footer-column-social">
                        <h6 className="u-bold">Siga o Morant</h6>
                        <ul className="footer-list">
                            <li>
                                <Link href="https://www.facebook.com/cuponomia">
                                    <a className="footer-icon is-facebook" title="Facebook" aria-label="Logo do Facebook"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/cuponomia">
                                    <a className="footer-icon is-twitter" title="Twitter" aria-label="Logo do Twitter"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/user/cuponomia">
                                    <a className="footer-icon is-youtube" title="YouTube" aria-label="Logo do YouTube"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/cuponomia">
                                    <a className="footer-icon is-instagram" title="Instagram" aria-label="Logo do Instagram"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </Link>
                            F</li>
                        </ul>
                    </div>
                </nav>
                <div className="footer-legal u-foot">
                    <div className="logo">
                        <Link href="/">
                            <a title="Ir para a página inicial" >
                                <img src="/images/logos/oblique_shadow_no_shape_logo.png" alt="Morant - Cupons de Desconto Online Grátis" crossOrigin="anonymous" />
                            </a>
                        </Link>
                    </div>
                    <div className="legal-info">
                        <div className="inner-div">
                            <p>© 2012-2020 Morant Divulgação Virtual LTDA | 12.648.066/0001-71 | Endereço: Av. São João, 2405 - São
                        José dos Campos, SP - CEP: 12242-000</p>
                            <p>
                                <Link href="/termos-uso">
                                    <a>Termos de Uso </a>
                                </Link>
                                |
                                <Link href="/privacidade">
                                    <a> Política de Privacidade</a>
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
